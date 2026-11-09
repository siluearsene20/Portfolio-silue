export type Project = {
  name: string
  context: string
  category: string
  description: string
  theme?: string
  functionalScope?: string
  contributions: string[]
  technologies: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Hackathon SIREXE',
    context: 'SIREXE · Tech Lead',
    category: 'Hackathon / Leadership technique',
    description: 'Pilotage technique d’une équipe pendant le hackathon SIREXE, de la compréhension du besoin jusqu’à la structuration de la solution proposée.',
    theme: 'Industries extractives et énergétiques : quelles infrastructures pour soutenir le développement économique en Afrique ?',
    functionalScope: 'Fonctionnellement, le défi consiste à partir d’un problème concret des secteurs des mines, du pétrole ou de l’énergie, à identifier les utilisateurs et leurs besoins, puis à construire un prototype opérationnel : parcours clair, données structurées, indicateurs de suivi et démonstration de la valeur de la solution.',
    contributions: ['Coordination technique de l’équipe', 'Répartition et suivi des tâches de développement', 'Accompagnement des choix d’architecture et d’implémentation', 'Contribution au prototypage et à la présentation de la solution'],
    technologies: ['Architecture', 'Prototypage', 'Travail d’équipe'],
    featured: true,
  },
  {
    name: 'Plateformes web multi-espaces',
    context: 'ST2I · Depuis juin 2024',
    category: 'Full Stack',
    description: 'Conception et maintenance de plateformes web avec espace public, espace client et back office administrateur.',
    contributions: ['Développement frontend et backend', 'Conception et consommation d’API REST', 'Architecture microservices et architecture hexagonale', 'Corrections UI responsive et internationalisation FR/EN'],
    technologies: ['Angular', 'React.js', 'FastAPI', 'Spring Boot', 'API REST'],
  },
  {
    name: 'Application de gestion de tontines',
    context: 'Kotiz · Mission freelance',
    category: 'Full Stack',
    description: 'Contribution au développement et à l’intégration de fonctionnalités pour une application de gestion de tontines et de cotisations.',
    contributions: ['Amélioration de parcours utilisateurs', 'Développement de fonctionnalités web', 'Corrections frontend et backend ciblées'],
    technologies: ['Web', 'Frontend', 'Backend'],
  },
  {
    name: 'Migration HIF vers Odoo',
    context: 'Progistack · Projet industriel pour SIVOP',
    category: 'ERP / Odoo',
    description: 'Participation à la migration d’un logiciel de gestion d’usine vers Odoo pour une usine agro-industrielle.',
    contributions: ['Analyse des processus métiers', 'Reprise et structuration des données', 'Développement et intégration de modules Odoo', 'Connexion d’équipements tiers et accompagnement des utilisateurs'],
    technologies: ['Odoo', 'Python', 'XML', 'Apache NiFi', 'Apache Airflow'],
  },
  {
    name: 'Intégration de données biométriques',
    context: 'Progistack · Mars 2023 – Mai 2024',
    category: 'Backend',
    description: 'Intégration de données issues de bornes biométriques dans Odoo afin de les synchroniser et de les structurer pour l’exploitation métier.',
    contributions: ['Synchronisation des données', 'Contrôle et structuration des informations', 'Intégration dans le système Odoo', 'Collaboration avec les équipes projet'],
    technologies: ['Odoo', 'Python', 'Données', 'Apache NiFi'],
  },
  {
    name: 'Application de gestion immobilière',
    context: 'GESTIMO · Avril – Juillet 2021',
    category: 'Frontend',
    description: 'Développement d’une application web dédiée à la gestion de transactions immobilières.',
    contributions: ['Développement des écrans de saisie', 'Écrans de consultation', 'Suivi des opérations immobilières'],
    technologies: ['Application web', 'Frontend'],
  },
]
