# Configuration EmailJS pour le Formulaire de Contact

## Étapes de Configuration

### 1. Créer un Compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" et créez un compte gratuit
3. Confirmez votre email

### 2. Configurer un Service Email

1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte
5. **Notez le Service ID** (ex: `service_abc123`)

### 3. Créer un Template Email

1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Configurez le template avec ces variables :

**Subject:** Nouvelle demande de contact - {{from_name}}

**Body:**
```
Nouvelle demande de contact depuis Silent Office

Nom: {{from_name}}
Entreprise: {{company}}
Email: {{from_email}}
Téléphone: {{phone}}
Budget: {{budget}}

Description des besoins:
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact de silentoffice.org
```

4. Dans les paramètres du template :
   - **To Email:** contact@silentoffice.org
   - **From Name:** {{from_name}}
   - **Reply To:** {{from_email}}

5. **Notez le Template ID** (ex: `template_xyz789`)

### 4. Récupérer votre Public Key

1. Allez dans **Account** → **General**
2. Trouvez votre **Public Key** (ex: `abcdefghijklmnop`)
3. **Notez cette clé**

### 5. Créer le Fichier de Configuration

Créez un fichier `.env.local` à la racine du projet avec vos identifiants :

```env
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

**Exemple :**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

### 6. Redémarrer le Serveur

Après avoir créé le fichier `.env.local`, redémarrez le serveur de développement :

```bash
# Arrêter le serveur (Ctrl+C)
# Puis relancer
npm run dev
```

---

## Vérification

Une fois configuré, testez le formulaire :

1. Allez sur http://localhost:3000/contact
2. Remplissez tous les champs
3. Cliquez sur "Envoyer"
4. Vérifiez votre boîte mail contact@silentoffice.org

---

## Limites du Plan Gratuit

- **200 emails/mois** gratuits
- Suffisant pour démarrer
- Possibilité d'upgrade si nécessaire

---

## Dépannage

### Le formulaire ne s'envoie pas
- Vérifiez que le fichier `.env.local` existe à la racine
- Vérifiez que les variables commencent par `VITE_`
- Redémarrez le serveur après modification du `.env.local`

### Email non reçu
- Vérifiez les spams
- Vérifiez que l'email de destination est correct dans le template EmailJS
- Consultez les logs dans le dashboard EmailJS

### Erreur de configuration
- Vérifiez que les IDs sont corrects (pas d'espaces)
- Vérifiez que le service email est bien connecté dans EmailJS
