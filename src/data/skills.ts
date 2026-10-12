export type SkillGroup = {
  name: string
  command: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Frontend',
    command: 'frontend.json',
    skills: ['React.js', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    command: 'backend.json',
    skills: ['Java / Spring Boot', 'Python / FastAPI', 'Python / Flask', 'PHP / Laravel', 'Odoo / Python / XML', 'API REST'],
  },
  {
    name: 'Mobile',
    command: 'mobile.json',
    skills: ['React Native', 'TypeScript', 'Applications cross-platform'],
  },
  {
    name: 'Données & ETL',
    command: 'data-pipelines.json',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Modélisation SQL', 'Apache NiFi', 'Apache Airflow'],
  },
  {
    name: 'DevOps',
    command: 'devops.json',
    skills: ['Docker', 'Git', 'GitLab CI/CD', 'Tests', 'Intégration continue'],
  },
  {
    name: 'Architecture & sécurité',
    command: 'architecture.json',
    skills: ['Microservices', 'Architecture hexagonale', 'Monolithique', 'Mono repo', 'FSD', 'Kafka', 'RabbitMQ', 'JWT', 'OAuth2', 'OWASP'],
  },
]
