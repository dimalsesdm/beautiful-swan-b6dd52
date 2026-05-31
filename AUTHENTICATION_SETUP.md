# 🔐 Configuration de l'Authentification Firebase

## ✅ Fichiers ajoutés

### Configuration Firebase
- `src/lib/firebase.ts` - Initialisation Firebase avec Auth et Firestore

### Hooks & Contexte
- `src/hooks/useAuth.ts` - Hook de gestion d'authentification avec contexte React

### Composants
- `src/components/auth/SignupForm.tsx` - Formulaire d'inscription
- `src/components/auth/LoginForm.tsx` - Formulaire de connexion
- `src/components/auth/ProfileMenu.tsx` - Menu profil utilisateur
- `src/components/auth/DeleteAccountModal.tsx` - Modal de suppression de compte

### Configuration
- `.env.local.example` - Variables d'environnement Firebase

---

## 🚀 Prochaines étapes

### 1. Installation des dépendances Firebase
```bash
npm install firebase
```

### 2. Configuration Firebase Console
1. Créer un projet sur [Firebase Console](https://console.firebase.google.com/)
2. Activer **Authentication** (Email/Password)
3. Créer une base **Firestore Database**
4. Copier les clés depuis "Paramètres du projet"

### 3. Définir les variables d'environnement
```bash
cp .env.local.example .env.local
# Puis remplir avec vos clés Firebase
```

### 4. Wrapper l'application avec AuthProvider
Dans votre fichier racine (probablement `src/routes/__root.tsx` ou `src/main.tsx`):

```typescript
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <AuthProvider>
      {/* Votre application */}
    </AuthProvider>
  );
}
```

### 5. Intégrer les composants Auth
Dans votre layout/header:

```typescript
import { ProfileMenu } from './components/auth/ProfileMenu';
import { useAuth } from './hooks/useAuth';

export function Header() {
  const { user } = useAuth();
  
  return (
    <header>
      {/* Votre contenu */}
      {user && <ProfileMenu />}
    </header>
  );
}
```

---

## 📋 Fonctionnalités implémentées

✅ **Inscription** - Créer un compte avec email/mot de passe  
✅ **Connexion** - Se connecter avec ses identifiants  
✅ **Menu Profil** - Afficher les options utilisateur  
✅ **Déconnexion** - Logout sécurisé  
✅ **Suppression de compte** - Supprimer définitivement le compte avec confirmation  
✅ **Stockage Firestore** - Données utilisateur persistantes  
✅ **Gestion d'erreurs** - Messages d'erreur clairs en français  
✅ **UI/UX** - Interfaces propres avec Tailwind CSS  

---

## 🔒 Sécurité RGPD

### Suppression de données
Le hook `useAuth` supprime :
- Les données utilisateur dans Firestore (`users/{uid}`)
- Le compte Firebase Auth (irréversible)

### Conformité
- ✅ Consentement explicite avant suppression
- ✅ Suppression complète et immédiate des données
- ✅ Aucune rétention de données de logs personnelles

---

## 📚 Documentation utilisateur

Les utilisateurs peuvent :
1. **S'inscrire** via un formulaire sécurisé
2. **Se connecter** avec email/mot de passe
3. **Voir leur profil** dans le menu dédié
4. **Se déconnecter** à tout moment
5. **Supprimer leur compte** définitivement depuis le menu profil

---

## 🐛 Dépannage

### Les variables d'environnement ne se chargent pas
→ Redémarrer le serveur dev après modification de `.env.local`

### Firebase dit "Emulatores already connected"
→ C'est normal en développement, le message peut être ignoré

### Erreur "useAuth must be used within AuthProvider"
→ Assurez-vous que `AuthProvider` wraps votre application

---

## ✨ Prochaines améliorations possibles

- [ ] Récupération de mot de passe oubli
- [ ] Authentification OAuth (Google, GitHub)
- [ ] MFA / 2FA
- [ ] Page de paramètres utilisateur
- [ ] Avatar/Photo de profil
- [ ] Historique d'activité utilisateur

---

**Branche:** `feature/user-authentication`  
**Status:** En cours de développement 🚀
