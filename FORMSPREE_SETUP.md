# Configuration Formspree - SUPER SIMPLE ! 🚀

## Étapes (5 minutes max)

### 1. Créer un compte Formspree

1. Allez sur [https://formspree.io/](https://formspree.io/)
2. Cliquez sur "Get Started" (gratuit, 50 emails/mois)
3. Créez un compte avec votre email

### 2. Créer un nouveau formulaire

1. Dans le dashboard, cliquez sur "+ New Form"
2. Donnez un nom à votre formulaire : "Contact Silent Office"
3. **Email de destination** : `contact@silentoffice.org`
4. Cliquez sur "Create Form"

### 3. Récupérer le Form ID

Après création, vous verrez un code comme :
```html
<form action="https://formspree.io/f/YOUR_FORM_ID">
```

**Copiez le Form ID** (ex: `mwpkgdnq`)

### 4. Mettre à jour .env.local

Ouvrez le fichier `.env.local` à la racine du projet et remplacez :

```env
VITE_FORMSPREE_FORM_ID=mwpkgdnq
```

(Remplacez `mwpkgdnq` par votre vrai Form ID)

### 5. Redémarrer le serveur

```bash
# Arrêtez le serveur (Ctrl+C)
# Relancez
npm run dev
```

### 6. Tester !

1. Allez sur http://localhost:3000/contact
2. Remplissez le formulaire
3. Cliquez sur "Envoyer"
4. Vérifiez votre email contact@silentoffice.org

---

## C'est tout ! 🎉

Formspree s'occupe de tout :
- ✅ Pas de template à configurer
- ✅ Pas de service email à connecter
- ✅ Juste un Form ID et c'est parti !

---

## Limites du plan gratuit

- **50 emails/mois** gratuits
- Protection anti-spam incluse
- Possibilité d'upgrade si nécessaire

---

## Dépannage

### Le formulaire ne s'envoie pas
- Vérifiez que `.env.local` contient le bon Form ID
- Vérifiez que la variable commence par `VITE_`
- Redémarrez le serveur après modification

### Email non reçu
- Vérifiez les spams
- Vérifiez l'email de destination dans Formspree
- Consultez les logs dans le dashboard Formspree
