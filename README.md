# 📖 README – MyContacts Frontend

## 🖥️ Présentation
**MyContacts** est une application web permettant de gérer des contacts (CRUD).  
Elle est développée en **React + Vite**, avec un backend Node.js/Express (API REST sécurisée par JWT).  

Fonctionnalités principales :
- 🔐 Authentification (Login / Register)
- 📋 Gestion des contacts (Lister, Ajouter, Modifier, Supprimer)
- 🛡️ Routes protégées (accès uniquement si connecté)
- 🌐 Déploiement sur **Netlify** (frontend) et **Render** (backend)

---

## ⚙️ Prérequis
- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## 🛠️ Installation & Lancement

### 1. Cloner le repo
```bash
git clone https://github.com/DannyNaco/mycontacts-front.git
cd mycontacts-front
```

### 2. Installer les dépendances
```bash
npm install
# ou
yarn install
```

### 3. Variables d’environnement
Créer un fichier `.env` à la racine :
```
VITE_API_URL=http://localhost:3000
```

Pour la production (Netlify), définir `VITE_API_URL` dans **l’UI Netlify** (Build & Deploy > Environment Variables), par exemple :
```
VITE_API_URL=https://ton-api.onrender.com
```

### 4. Lancer en dev
```bash
npm run dev
```
👉 Front disponible sur `http://localhost:5173`

### 5. Build pour la prod
```bash
npm run build
```
👉 Résultat compilé dans le dossier `dist/`.

### 6. Prévisualiser le build
```bash
npm run preview
```

---

## 🔐 Sécurité
- **JWT** stocké en `localStorage`
- **Axios interceptor** → ajoute `Authorization: Bearer <token>` automatiquement
- **ProtectedRoute** → empêche l’accès aux pages protégées si pas de token

---

## 👨‍💻 Auteur
Projet réalisé par **Danny Naco**, dans le cadre du projet **MyContacts**.  
