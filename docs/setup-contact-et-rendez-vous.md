# Mise en service : réservation d'appel et formulaire de contact

Ce que le code fait déjà, et ce qu'il reste à configurer pour que ça marche
en production. Cal.com est fait ; il reste Resend et Vercel, une dizaine de minutes.

Remplace `FORMSPREE_SETUP.md` (Formspree a été retiré) et rend `EMAILJS_SETUP.md`
caduc — EmailJS n'a jamais existé dans le code.

## Ce qui est déjà branché

| Fichier | Rôle |
|---|---|
| `src/pages/ContactPage.tsx` | La page `/contact` : agenda en premier, formulaire en repli |
| `src/config/booking.ts` | Créneaux Cal.com, coordonnées affichées, fourchettes de budget |
| `src/hooks/useContactForm.ts` | Envoi partagé par les deux formulaires du site |
| `src/components/Footer.tsx` | Le formulaire court du pied de page, désormais branché |
| `api/contact.ts` | Fonction serveur : validation, notification, accusé de réception |

Deux messages partent à chaque envoi valide : la demande vers votre boîte, avec
`Reply-To` réglé sur l'adresse du prospect, et un accusé de réception vers le
prospect.

---

## 1. Cal.com — ✅ fait le 24/09/2026

Configuré via l'API, rien ne vous reste à faire ici. État vérifié :

| Slug | Titre | Durée | Utilisé par le site |
|---|---|---|---|
| `30min` | Premier échange | 30 min | **oui** — carte « 30 min » |
| `60min` | Atelier de cadrage | 60 min | **oui** — carte « 1 h » |
| `discovery-call`, `15min`, `secret` | — | — | non — **masqués** |

`cal.com/flowera.ch` ne propose donc plus que les deux formats du site.

**Google Calendar était déjà connecté** — compte `fantin.schellekens@gmail.com`,
détection des conflits active sur l'agenda principal, qui sert aussi d'agenda de
destination. Les rendez-vous pris y atterrissent et Cal.com vous envoie un mail
à chaque réservation.

Réglages de compte alignés au passage : fuseau `Europe/Zurich` (était
`Europe/Paris`), horloge **24 h** (était 12 h), interface en **français**,
semaine commençant le **lundi** (était dimanche).
Disponibilités inchangées : « Heures de travail », lundi-vendredi 09:00–17:00.

### Le seul point qui reste

**Les notifications de réservation partent vers `fantin.schellekens@gmail.com`**,
l'adresse du compte Cal.com — pas vers votre boîte professionnelle.

Ce champ **n'est pas modifiable par l'API** : Cal.com accepte la requête et
ignore la valeur, parce que le compte est lié à Google (avatar et adresse
Google). Il faut le faire dans **Settings → Profile**, puis vérifier que la
connexion « Continue with Google » fonctionne encore avant de fermer la session.

### Si vous renommez un créneau plus tard

Le **titre** est libre, le **slug** est ce qui relie le site à Cal.com.
Changer un slug oblige à déclarer `VITE_CAL_SLUG_30` ou `VITE_CAL_SLUG_60`
dans Vercel. Vérification en une commande :

```bash
curl -o /dev/null -w '%{http_code}\n' https://cal.com/flowera.ch/60min   # 200 attendu
```

---

## 2. Resend — l'envoi des messages (10 min)

### Le compte et le domaine

1. [resend.com/signup](https://resend.com/signup) — plan gratuit : 3 000 messages
   par mois, très au-dessus des besoins d'un site vitrine.
2. **Domains → Add Domain → `flowera.ch`**, région **EU (Ireland)** pour que les
   données restent en Europe.
3. Resend affiche trois enregistrements DNS à créer.

### Les enregistrements chez Hostinger

**hPanel → Domaines → `flowera.ch` → DNS / Nameservers → Gérer les
enregistrements DNS.** Resend affiche **trois** enregistrements — un TXT et
deux CNAME. Recopiez les valeurs telles qu'il les donne :

| Type | Nom | Rôle | TTL |
|---|---|---|---|
| `TXT` | `resend._domainkey` | DKIM : signe vos messages | `3600` |
| `CNAME` | `rsend` | Chemin de retour / SPF | `3600` |
| `CNAME` | `send` | Chemin de retour / SPF | `3600` |

**TTL** : Resend affiche « Auto », ce qui veut dire « valeur par défaut de
l'hébergeur ». Hostinger n'accepte que des nombres : mettez **`3600`**. Le TTL
ne conditionne pas la validité de l'enregistrement, seulement la durée de mise
en cache. Si Hostinger impose son minimum (souvent `14400`), c'est bon aussi.

> **Vos e-mails actuels ne risquent rien.** Les trois enregistrements portent
> sur des sous-domaines (`resend._domainkey`, `rsend`, `send`) : ni le `MX` ni
> le `SPF` de la racine `flowera.ch` ne sont touchés, donc la réception sur
> `fantin.schellekens@flowera.ch` continue exactement pareil. Ne créez surtout
> pas un second enregistrement SPF **sur la racine** — un domaine ne peut en
> avoir qu'un seul, et le doublon casserait l'envoi.

Deux pièges Hostinger :

- Saisissez le **nom court** (`send`), pas `send.flowera.ch` : Hostinger ajoute
  le domaine tout seul. Si l'interface affiche déjà `.flowera.ch` en suffixe,
  n'écrivez que la partie de gauche.
- Un `CNAME` sur `send` interdit tout autre enregistrement au même nom. S'il y
  en a déjà un, supprimez-le d'abord.

Laissez **« Enable Receiving » désactivé** : le site envoie, il ne reçoit rien
via Resend.

Revenez sur Resend et cliquez **Verify DNS Records**. La propagation prend de
quelques minutes à quelques heures.

### Vérifier sans attendre l'interface

```bash
# les enregistrements sont-ils publiés ?
dig +short TXT resend._domainkey.flowera.ch
dig +short CNAME rsend.flowera.ch
dig +short CNAME send.flowera.ch
```

Trois réponses non vides = Resend pourra vérifier.

### La clé d'API

**API Keys → Create API Key**, permission *Sending access* (surtout pas
*Full access* : l'application n'a besoin que d'envoyer), domaine `flowera.ch`.
**Copiez la clé tout de suite** : Resend ne la réaffiche jamais.

Pour tester la chaîne complète dès que le domaine est vérifié :

```bash
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer $RESEND_API_KEY" -H "Content-Type: application/json" \
  -d '{"from":"Flowera <contact@flowera.ch>","to":["fantin.schellekens@flowera.ch"],
       "subject":"Test","html":"<p>ok</p>"}'
```

- `403 ... domain is not verified` → le DNS n'est pas encore pris en compte
- `200` avec un `id` → tout fonctionne, le formulaire du site marchera

---

## 3. Vercel — les variables (2 min)

**Settings → Environment Variables.** En pratique, **une seule variable est à
créer** :

| Variable | Valeur | À créer ? |
|---|---|---|
| `RESEND_API_KEY` | la clé `re_…` | **oui** — Production, Preview, Development |
| `CONTACT_TO_EMAIL` | `fantin.schellekens@flowera.ch` | non — déjà la valeur par défaut du code |
| `CONTACT_FROM_EMAIL` | `Flowera <contact@flowera.ch>` | non — déjà la valeur par défaut |
| `VITE_CAL_USERNAME` | `flowera.ch` | non — déjà la valeur par défaut |
| `VITE_CAL_SLUG_30` / `_60` | `30min` / `60min` | non — seulement si vous renommez un créneau |

Les quatre dernières ont leur valeur écrite en dur dans le code comme repli
(`src/config/booking.ts`, `api/contact.ts`). Les déclarer ne sert qu'à changer
la valeur sans redéployer.

### Secret ou public : la règle du projet

> `RESEND_API_KEY` **ne doit jamais** porter le préfixe `VITE_`. Ce préfixe rend
> une variable visible dans le code envoyé au navigateur : la clé serait lisible
> par n'importe quel visiteur, et permettrait d'envoyer des mails signés
> `@flowera.ch`. C'est le seul vrai secret du projet.

À l'inverse, les variables `VITE_CAL_*` **doivent** rester publiques : le handle
Cal.com apparaît de toute façon dans l'URL de l'iframe de réservation, lisible
dans le code source de `/contact`.

**Si Vercel affiche « Remove the public framework prefix to keep this value
private »** en ajoutant une variable `VITE_…` : c'est un avertissement
générique, sans objet ici. **Ne retirez pas le préfixe** — Vite n'expose au
navigateur que les variables préfixées `VITE_`, donc une variable renommée
`CAL_USERNAME` serait tout simplement ignorée par le front, sans erreur, et le
site retomberait sur sa valeur par défaut. Choisissez **Config** dans le
sélecteur de Vercel, ou plus simplement ne créez pas la variable.

Redéployez pour que les variables soient prises en compte.

---

## Tester

**En local, `npm run dev` ne sert pas `/api/`** : Vite renvoie `index.html` et le
formulaire affiche une erreur. C'est normal. Pour tester l'envoi pour de vrai :

```bash
npx vercel dev      # sert le site ET les fonctions /api/
```

ou testez simplement sur le déploiement de prévisualisation.

### Vérifications

- [x] `/contact` affiche l'agenda sur les deux durées — vérifié le 24/09/2026
- [x] Le bouton `1 h` bascule bien sur « Atelier de cadrage »
- [ ] Une réservation d'essai apparaît dans Google Calendar **et** déclenche un
      e-mail de Cal.com
- [ ] Un envoi du formulaire arrive sur `fantin.schellekens@flowera.ch`
- [ ] **Répondre** à ce message adresse bien la réponse au prospect, pas à vous
- [ ] Le prospect reçoit l'accusé de réception (regardez aussi les indésirables
      le premier jour)
- [ ] Le formulaire du **pied de page** fonctionne aussi — il passe par la même
      fonction, avec la mention « Pied de page » dans le mail reçu

---

## Dépannage

| Symptôme | Cause la plus probable |
|---|---|
| « Error Code: 404. Cal Link seems to be wrong » | Le slug du créneau n'existe pas. Vérifiez d'une commande : `curl -o /dev/null -w '%{http_code}' https://cal.com/flowera.ch/60min` — `200` si le créneau existe, `404` sinon |
| « L'envoi est momentanément indisponible » | `RESEND_API_KEY` absente ou non déployée |
| « L'envoi a échoué » | Domaine pas encore vérifié chez Resend, ou `CONTACT_FROM_EMAIL` sur un domaine non vérifié |
| Le formulaire échoue en local uniquement | Attendu : utilisez `npx vercel dev` |
| Les créneaux proposés sont faux | **Availability** dans Cal.com, et fuseau du compte réglé sur Europe/Zurich |

Les erreurs côté serveur sont tracées dans **Vercel → Logs**, préfixées
`[contact]`.
