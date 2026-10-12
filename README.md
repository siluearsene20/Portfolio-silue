# Portfolio Full Stack — Dev Geek

Portfolio personnel one-page d’un développeur Full Stack, conçu pour présenter ses compétences, son expérience, ses projets et ses services à des recruteurs, entreprises et clients, en français comme à l’international.

> **Statut :** étape 1 initialisée — fondations techniques et tokens visuels en place.

## Objectifs

- Construire une interface premium, lisible et responsive.
- Affirmer une identité visuelle inspirée des environnements de développement et du terminal.
- Présenter les informations personnelles à partir de données locales typées.
- Préparer une architecture facilement connectable à une future API REST.
- Respecter les bonnes pratiques d’accessibilité, de performance et de référencement.

## Périmètre actuel

La première version est exclusivement frontend :

- aucune API serveur ;
- aucune base de données ;
- aucune authentification ;
- données stockées dans des fichiers TypeScript locaux sous `src/data/` ;
- formulaire de contact utilisant `mailto:`, sans simuler un envoi réussi.

Les informations personnelles, chiffres, entreprises, liens et projets non confirmés doivent rester des placeholders clairement identifiés, par exemple `TODO: à remplacer`.

## Stack prévue

- React 19 avec Vite et TypeScript strict ;
- Tailwind CSS v4 avec `@tailwindcss/vite` ;
- `motion` pour les animations React ;
- Lucide React pour les icônes ;
- React Hook Form et Zod pour la validation du contact ;
- polices locales via `@fontsource-variable` ;
- navigation one-page par ancres, sans React Router.

Chaque dépendance devra répondre à un besoin identifié et éviter toute complexité superflue.

## Direction artistique

Le thème sombre est activé par défaut, avec un thème clair de type « papier » en option. La préférence est mémorisée dans `localStorage` et doit être appliquée sans flash au chargement.

L’interface s’appuie sur :

- un fond proche de `#0b0e14` ;
- le bleu électrique comme couleur principale ;
- le violet comme accent ;
- le vert terminal pour les états positifs et détails ;
- JetBrains Mono pour les titres, labels et éléments de code ;
- Inter pour les textes courants ;
- des cartes inspirées de fenêtres de terminal, avec barre de titre et trois pastilles ;
- des titres de sections présentés comme des commandes : `$ whoami`, `$ cat skills.json`, `$ git log --experience`, `$ ls projects/` et `$ ./contact.sh`.

Le rendu doit rester minimaliste et professionnel : l’esthétique geek ne doit jamais nuire à la lisibilité.

## Sections prévues

1. **Header** — logo, navigation, thème, menu mobile accessible et lien actif selon la section visible.
2. **Hero** — nom configurable, titre de développeur Full Stack, présentation, photo avec fallback, CV et liens sociaux.
3. **À propos** — parcours, expertise et indicateurs configurables depuis `profile.ts`.
4. **Compétences** — Frontend, Backend, bases de données, DevOps, ERP et architecture, sans pourcentages de maîtrise.
5. **Expériences** — timeline verticale inspirée de `git log`, alimentée par `experiences.ts`.
6. **Projets** — cartes filtrables, données de démonstration marquées « Exemple » et modale de détails accessible.
7. **Services** — applications web, React/Angular, backend et API REST, intégration de systèmes, Odoo, maintenance et optimisation.
8. **Contact** — formulaire nom, email, sujet et message, validé avec Zod et transmis via `mailto:`.
9. **Footer** — navigation, réseaux sociaux, année dynamique et retour en haut.

Le Hero prévoit un effet de frappe alternant notamment `React Developer`, `Angular Developer`, `Spring Boot Developer` et `Software Engineer`. Avec `prefers-reduced-motion`, le contenu doit rester affiché de manière statique.

## Compétences à présenter

- **Frontend :** React.js, Angular, Vue.js, JavaScript, TypeScript, HTML5, CSS3, React Native.
- **Backend :** Java Spring Boot, Python avec FastAPI ou Flask, Laravel, API REST.
- **Bases de données :** PostgreSQL, MySQL.
- **DevOps :** Docker, Git, GitLab CI/CD.
- **ERP :** Odoo, modules spécifiques et intégration.
- **Architecture :** microservices, Kafka, RabbitMQ et intégration de systèmes.

## Architecture cible

```text
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── common/
│   ├── layout/
│   └── ui/
├── sections/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Experience/
│   ├── Projects/
│   ├── Services/
│   └── Contact/
├── data/
│   ├── profile.ts
│   ├── skills.ts
│   ├── projects.ts
│   └── experiences.ts
├── hooks/
├── types/
├── utils/
├── styles/
├── App.tsx
└── main.tsx
```

Les composants doivent rester fonctionnels, réutilisables et séparés par responsabilité. Les données locales doivent être typées et structurées de façon à pouvoir être remplacées ultérieurement par une source REST.

## Accessibilité et qualité

- contraste conforme au niveau AA ;
- navigation complète au clavier et focus visible ;
- HTML sémantique et attributs ARIA pertinents ;
- textes alternatifs pour les images ;
- modale avec gestion du focus et fermeture par `Échap` ;
- respect strict de `prefers-reduced-motion` ;
- images optimisées, au format WebP lorsque possible, avec dimensions explicites et `loading="lazy"` ;
- métadonnées SEO et Open Graph ;
- aucun secret dans le frontend ;
- objectif Lighthouse : 90+ en performance, accessibilité et SEO.

## Feuille de route

- [x] Initialiser Vite, React, TypeScript strict, Tailwind CSS v4, alias `@/` et polices locales.
- [ ] Mettre en place l’architecture, les types, les données locales et le thème clair/sombre.
- [ ] Développer le Header, le Footer et le Hero.
- [ ] Développer les sections À propos, Compétences et Expériences.
- [ ] Développer les projets, filtres et modale accessible.
- [ ] Ajouter les Services et le formulaire de contact.
- [ ] Finaliser les animations, le responsive, l’accessibilité et les optimisations.
- [ ] Tester, produire le build et préparer le déploiement sur Vercel ou Netlify.

Chaque étape doit être validée avant de commencer la suivante.

## Vérification prévue

Une fois le projet initialisé, les commandes principales seront :

```bash
npm install
npm run dev
npm run build
```

Le projet est considéré comme prêt lorsque le développement local, le build de production, les principaux parcours clavier, les deux thèmes et les états vides fonctionnent correctement.
