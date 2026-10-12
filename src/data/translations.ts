import type { Project } from '@/data/projects'

export type Language = 'fr' | 'en'

export const ui = {
  fr: {
    languageLabel: 'Changer de langue',
    available: 'Disponible pour de nouvelles opportunités',
    about: 'À propos',
    skills: 'Compétences',
    education: 'Études',
    projects: 'Projets',
    contact: 'Contact',
    heroDescription: 'Mon parcours m’a conduit des interfaces web et mobiles aux systèmes métier, aux ERP et aux architectures distribuées. J’aime transformer une idée ou un besoin complexe en solution claire, fiable et utile.',
    seeSkills: 'Voir mes compétences',
    contactMe: 'Me contacter',
    aboutTitle: 'Du besoin métier à la solution logicielle.',
    aboutCommand: '$ about --status',
    bio: 'Je suis développeur Full Stack avec un parcours en génie logiciel et cinq années d’expérience professionnelle. J’ai travaillé sur des plateformes web et mobiles, des intégrations Odoo pour un environnement industriel, des flux de données et des API. Cette diversité m’a appris à regarder un produit dans son ensemble : comprendre le besoin, construire une expérience claire, relier les services et livrer une solution qui tient dans le monde réel.',
    quote: '« Hello World » — une ouverture sur un univers de possibles, avec un langage qui dépasse la technique et transforme le monde tangible.',
    skillsTitle: 'Une stack pour livrer de bout en bout.',
    educationTitle: 'Un parcours en génie logiciel.',
    projectsTitle: 'Des expériences transformées en solutions.',
    documentedProjects: 'projets documentés',
    contactTitle: 'Construisons quelque chose d’utile.',
    sendEmail: 'Envoyer un email',
    footerTagline: 'built with curiosity',
    themeLight: 'clair',
    themeDark: 'sombre',
    educationField: 'Systèmes Informatiques et Génie Logiciel',
  },
  en: {
    languageLabel: 'Change language',
    available: 'Available for new opportunities',
    about: 'About',
    skills: 'Skills',
    education: 'Education',
    projects: 'Projects',
    contact: 'Contact',
    heroDescription: 'My journey has taken me from web and mobile interfaces to business systems, ERP platforms and distributed architectures. I enjoy turning complex needs into clear, reliable and useful solutions.',
    seeSkills: 'Explore my skills',
    contactMe: 'Contact me',
    aboutTitle: 'From business needs to software solutions.',
    aboutCommand: '$ about --status',
    bio: 'I am a Full Stack developer with a background in software engineering and five years of professional experience. I have worked on web and mobile platforms, Odoo integrations in an industrial environment, data pipelines and APIs. This range of work taught me to see a product as a whole: understand the need, build a clear experience, connect the services and deliver a solution that works in the real world.',
    quote: '“Hello World” — an opening into a universe of possibilities, through a language that goes beyond technology and transforms the tangible world.',
    skillsTitle: 'A stack built to deliver end to end.',
    educationTitle: 'A background in software engineering.',
    projectsTitle: 'Experience turned into solutions.',
    documentedProjects: 'documented projects',
    contactTitle: 'Let’s build something useful.',
    sendEmail: 'Send an email',
    footerTagline: 'built with curiosity',
    themeLight: 'light',
    themeDark: 'dark',
    educationField: 'Computer Systems and Software Engineering',
  },
} as const

export const skillGroupLabels: Record<string, Record<Language, string>> = {
  Frontend: { fr: 'Frontend', en: 'Frontend' },
  Backend: { fr: 'Backend', en: 'Backend' },
  Mobile: { fr: 'Mobile', en: 'Mobile' },
  'Données & ETL': { fr: 'Données & ETL', en: 'Data & ETL' },
  DevOps: { fr: 'DevOps', en: 'DevOps' },
  'Architecture & sécurité': { fr: 'Architecture & sécurité', en: 'Architecture & security' },
}

export const projectTranslations: Record<string, Record<Language, Pick<Project, 'name' | 'context' | 'category' | 'description' | 'contributions'>>> = {
  'Plateformes web multi-espaces': {
    fr: {
      name: 'Plateformes web multi-espaces', context: 'ST2I · Depuis juin 2024', category: 'Full Stack',
      description: 'Conception et maintenance de plateformes web avec espace public, espace client et back office administrateur.',
      contributions: ['Développement frontend et backend', 'Conception et consommation d’API REST', 'Architecture microservices et architecture hexagonale', 'Corrections UI responsive et internationalisation FR/EN'],
    },
    en: {
      name: 'Multi-space web platforms', context: 'ST2I · Since June 2024', category: 'Full Stack',
      description: 'Designed and maintained web platforms with public, client and administrator back-office areas.',
      contributions: ['Frontend and backend development', 'REST API design and integration', 'Microservices and hexagonal architecture', 'Responsive UI fixes and FR/EN internationalization'],
    },
  },
  'Application de gestion de tontines': {
    fr: {
      name: 'Application de gestion de tontines', context: 'Kotiz · Mission freelance', category: 'Full Stack',
      description: 'Contribution au développement et à l’intégration de fonctionnalités pour une application de gestion de tontines et de cotisations.',
      contributions: ['Amélioration de parcours utilisateurs', 'Développement de fonctionnalités web', 'Corrections frontend et backend ciblées'],
    },
    en: {
      name: 'Savings circle management app', context: 'Kotiz · Freelance mission', category: 'Full Stack',
      description: 'Contributed to the development and integration of features for a savings circle and contributions management application.',
      contributions: ['Improved user journeys', 'Developed web features', 'Targeted frontend and backend fixes'],
    },
  },
  'Migration HIF vers Odoo': {
    fr: {
      name: 'Migration HIF vers Odoo', context: 'Progistack · Projet industriel pour SIVOP', category: 'ERP / Odoo',
      description: 'Participation à la migration d’un logiciel de gestion d’usine vers Odoo pour une usine agro-industrielle.',
      contributions: ['Analyse des processus métiers', 'Reprise et structuration des données', 'Développement et intégration de modules Odoo', 'Connexion d’équipements tiers et accompagnement des utilisateurs'],
    },
    en: {
      name: 'HIF to Odoo migration', context: 'Progistack · Industrial project for SIVOP', category: 'ERP / Odoo',
      description: 'Helped migrate a factory management system to Odoo for an agro-industrial plant.',
      contributions: ['Business process analysis', 'Data migration and structuring', 'Odoo module development and integration', 'Third-party equipment integration and user support'],
    },
  },
  'Intégration de données biométriques': {
    fr: {
      name: 'Intégration de données biométriques', context: 'Progistack · Mars 2023 – Mai 2024', category: 'Backend',
      description: 'Intégration de données issues de bornes biométriques dans Odoo afin de les synchroniser et de les structurer pour l’exploitation métier.',
      contributions: ['Synchronisation des données', 'Contrôle et structuration des informations', 'Intégration dans le système Odoo', 'Collaboration avec les équipes projet'],
    },
    en: {
      name: 'Biometric data integration', context: 'Progistack · March 2023 – May 2024', category: 'Backend',
      description: 'Integrated data from biometric terminals into Odoo for synchronization and business use.',
      contributions: ['Data synchronization', 'Information control and structuring', 'Integration into the Odoo system', 'Collaboration with project teams'],
    },
  },
  'Application de gestion immobilière': {
    fr: {
      name: 'Application de gestion immobilière', context: 'GESTIMO · Avril – Juillet 2021', category: 'Frontend',
      description: 'Développement d’une application web dédiée à la gestion de transactions immobilières.',
      contributions: ['Développement des écrans de saisie', 'Écrans de consultation', 'Suivi des opérations immobilières'],
    },
    en: {
      name: 'Real estate management application', context: 'GESTIMO · April – July 2021', category: 'Frontend',
      description: 'Developed a web application dedicated to managing real estate transactions.',
      contributions: ['Data entry screens', 'Consultation screens', 'Real estate operations tracking'],
    },
  },
}
