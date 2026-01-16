# Mon CRUD - Application de Gestion des Réservations

Une application web moderne et intuitive pour gérer les réservations. Développée avec React, Vite et json-server, cette application offre une interface utilisateur fluide pour créer, lire, mettre à jour et supprimer des réservations.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé sur votre système :

- **Node.js** (version 16 ou supérieure) - [Télécharger Node.js](https://nodejs.org/)
- **npm** (généralement inclus avec Node.js) ou **yarn**

Vous pouvez vérifier les versions installées avec :
```bash
node --version
npm --version
```

## 🚀 Installation

Suivez ces étapes pour installer et configurer l'application après l'avoir clonée :

### 1. Cloner le dépôt

```bash
git clone <url-du-depot>
cd mon-crud
```

### 2. Installer les dépendances

Installez toutes les dépendances requises avec npm :

```bash
npm install
```

Ou si vous préférez utiliser yarn :

```bash
yarn install
```

## 🏃 Démarrage de l'application

L'application utilise deux serveurs : un pour le frontend (Vite) et un pour la base de données (json-server).

### Démarrer en mode développement

Ouvrez **deux terminaux** et exécutez les commandes suivantes :

#### Terminal 1 - Serveur de développement Vite (Frontend)
```bash
npm run dev
```

L'application sera disponible à l'adresse : `http://localhost:5173`

#### Terminal 2 - Serveur json-server (Base de données)
```bash
json-server --watch db.json --port 8000
```

Le serveur API sera accessible à : `http://localhost:8000`

### Alternative - Démarrage en une seule commande

Si vous souhaitez utiliser un gestionnaire de processus comme **concurrently**, vous pouvez modifier le `package.json` pour créer un script unique.

## 📦 Scripts disponibles

- **`npm run dev`** - Lance le serveur de développement Vite
- **`npm run build`** - Crée une version optimisée pour la production
- **`npm run preview`** - Prévisualise la version build en local
- **`npm run lint`** - Exécute ESLint pour vérifier la qualité du code

## 🗂️ Structure du projet

```
mon-crud/
├── src/
│   ├── componenets/
│   │   ├── ReservationForm.jsx          # Formulaire de création
│   │   ├── ReservationFormUpdate.jsx    # Formulaire de modification
│   │   ├── ReservationItem.jsx          # Composant d'une réservation
│   │   └── ReservationList.jsx          # Liste des réservations
│   ├── App.jsx                          # Composant principal
│   ├── App.css                          # Styles globaux
│   ├── index.css                        # Styles de base
│   ├── main.jsx                         # Point d'entrée
│   └── assets/                          # Images et ressources
├── public/                              # Fichiers statiques
├── db.json                              # Base de données JSON
├── package.json                         # Dépendances du projet
├── vite.config.js                       # Configuration Vite
├── eslint.config.js                     # Configuration ESLint
└── index.html                           # Page HTML principale
```

## 🛠️ Fonctionnalités

- ✅ **Créer** une nouvelle réservation via le formulaire
- ✅ **Lire** la liste complète des réservations
- ✅ **Mettre à jour** les informations d'une réservation existante
- ✅ **Supprimer** une réservation
- ✅ Interface utilisateur réactive et conviviale
- ✅ Validation des données du formulaire

## 🧪 Dépannage

### Le port 5173 est déjà utilisé
Si le port 5173 est occupé, Vite utilisera automatiquement le port suivant disponible. Vérifiez le message dans le terminal pour connaître l'URL correcte.

### Erreur de connexion à la base de données
Assurez-vous que json-server est bien lancé sur le port 8000. Vérifiez que le fichier `db.json` existe dans le répertoire racine du projet.

### Les changements ne s'actualisent pas
Vérifiez que le hot reload (rechargement à chaud) est activé. Dans Vite, c'est automatique. Essayez de rafraîchir manuellement le navigateur avec `F5` ou `Ctrl+R`.

## 📚 Technologies utilisées

- **React 19** - Bibliothèque JavaScript pour construire les interfaces utilisateur
- **Vite** - Outil de build moderne et rapide
- **React Router DOM** - Navigation côté client
- **json-server** - Serveur REST simulé basé sur JSON
- **ESLint** - Outil de linting pour la qualité du code

## 📝 Licence

Ce projet est fourni à titre de projet pédagogique.

## 💡 Conseils de développement

- Utilisez les React Developer Tools pour déboguer votre application
- Consultez la [documentation officielle de React](https://react.dev/)
- Explorez la [documentation de Vite](https://vitejs.dev/)
- Référez-vous à la [documentation de json-server](https://github.com/typicode/json-server)

---

**Besoin d'aide ?** Consultez les logs dans vos terminaux pour des messages d'erreur détaillés.
