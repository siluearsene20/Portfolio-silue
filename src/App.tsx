import { ArrowRight, Code2, Github, Linkedin, Moon, Sun, Terminal } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { skillGroups } from '@/data/skills'

type Theme = 'dark' | 'light'

const roles = ['React Developer', 'Angular Developer', 'Spring Boot Developer', 'Software Engineer']

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme === 'light' ? 'light' : 'dark'
  })
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length)
    }, 2800)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-6xl items-center justify-between" aria-label="Navigation principale">
        <a className="font-mono text-sm font-semibold tracking-tight text-[var(--text)]" href="/">
          <span className="text-[var(--accent)]">~/</span>{profile.shortName.toLowerCase().replace(' ', '-')}
        </a>
        <div className="flex items-center gap-3">
          <a className="hidden text-sm text-[var(--muted)] transition hover:text-[var(--text)] sm:inline" href="#about">
            À propos
          </a>
          <a className="hidden text-sm text-[var(--muted)] transition hover:text-[var(--text)] sm:inline" href="#skills">
            Compétences
          </a>
          <a className="hidden text-sm text-[var(--muted)] transition hover:text-[var(--text)] sm:inline" href="#education">
            Études
          </a>
          <a className="hidden text-sm text-[var(--muted)] transition hover:text-[var(--text)] sm:inline" href="#projects">
            Projets
          </a>
          <a className="hidden text-sm text-[var(--muted)] transition hover:text-[var(--text)] sm:inline" href="#contact">
            Contact
          </a>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Activer le thème ${theme === 'dark' ? 'clair' : 'sombre'}`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </nav>

      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center py-20" aria-labelledby="hero-title">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono text-xs text-[var(--muted)]">
              <span className="status-dot" aria-hidden="true" /> disponible pour de nouveaux projets
            </div>
            <p className="mb-4 font-mono text-sm text-[var(--accent)]">$ whoami</p>
            <h1 id="hero-title" className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-7xl">
              {profile.name.split(' ').slice(0, 2).join(' ')} <span className="text-gradient">{profile.name.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              {profile.title} — {profile.subtitle}. Je conçois des applications web et mobiles, des intégrations de systèmes et des architectures solides, de l’interface aux services backend.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a className="button-primary" href="#skills">
                Voir mes compétences <ArrowRight size={16} />
              </a>
              <a className="button-secondary" href="#contact">Me contacter</a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-[var(--muted)]">
              <span className="font-mono text-sm"><span className="text-[var(--accent)]">&gt;</span> {roles[roleIndex]}<span className="cursor" aria-hidden="true">_</span></span>
              <span className="h-4 w-px bg-[var(--border)]" aria-hidden="true" />
              <a aria-label="GitHub — TODO à remplacer" href="#contact" className="transition hover:text-[var(--text)]"><Github size={18} /></a>
              <a aria-label="LinkedIn — TODO à remplacer" href="#contact" className="transition hover:text-[var(--text)]"><Linkedin size={18} /></a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="terminal-card" aria-label="Aperçu de terminal">
            <div className="terminal-bar">
              <span className="terminal-dot bg-[#ff5f57]" />
              <span className="terminal-dot bg-[#febc2e]" />
              <span className="terminal-dot bg-[#28c840]" />
              <span className="ml-2 font-mono text-[11px] text-[var(--muted)]">profile.ts</span>
            </div>
            <div className="p-6 font-mono text-sm leading-8 text-[var(--muted)]">
              <div><span className="text-[#c084fc]">const</span> <span className="text-[#67e8f9]">developer</span> = {'{'}</div>
              <div className="pl-5"><span className="text-[var(--accent)]">name</span>: <span className="text-[#86efac]">'{profile.name}'</span>,</div>
              <div className="pl-5"><span className="text-[var(--accent)]">focus</span>: [</div>
              <div className="pl-10"><span className="text-[#86efac]">'interfaces'</span>,</div>
              <div className="pl-10"><span className="text-[#86efac]">'architecture'</span>,</div>
              <div className="pl-10"><span className="text-[#86efac]">'impact'</span>,</div>
              <div className="pl-5">],</div>
              <div className="pl-5"><span className="text-[var(--accent)]">stack</span>: <span className="text-[#86efac]">'web + mobile'</span>,</div>
              <div className="pl-5"><span className="text-[var(--accent)]">experience</span>: <span className="text-[#86efac]">'{profile.experience}'</span>,</div>
              <div>{'}'}</div>
              <div className="mt-5 flex items-center gap-2 text-[var(--accent)]"><Terminal size={15} /> npm run build<span className="cursor">_</span></div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl border-t border-[var(--border)] py-20" aria-labelledby="about-title">
        <p className="font-mono text-sm text-[var(--accent)]">$ about --status</p>
        <div className="mt-5 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <h2 id="about-title" className="text-3xl font-semibold tracking-tight text-[var(--text)]">Une base solide pour la suite.</h2>
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">{profile.bio}</p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl border-t border-[var(--border)] py-20" aria-labelledby="skills-title">
        <p className="font-mono text-sm text-[var(--accent)]">$ cat skills.json</p>
        <h2 id="skills-title" className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)]">Une stack pour livrer de bout en bout.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.name} className="terminal-card p-5">
              <div className="mb-4 flex items-center justify-between gap-4 font-mono text-xs text-[var(--muted)]">
                <span className="text-[var(--accent)]">{group.name}</span>
                <span>{group.command}</span>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label={`Compétences ${group.name}`}>
                {group.skills.map((skill) => <li key={skill} className="rounded-md border border-[var(--border)] px-2.5 py-1.5 font-mono text-xs text-[var(--text)]">{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl border-t border-[var(--border)] py-20" aria-labelledby="education-title">
        <p className="font-mono text-sm text-[var(--accent)]">$ cat education.json</p>
        <h2 id="education-title" className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)]">Un parcours en génie logiciel.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {profile.education.map((education) => (
            <article key={`${education.degree}-${education.period}`} className="terminal-card p-5">
              <p className="font-mono text-xs text-[var(--accent)]">{education.period}</p>
              <h3 className="mt-4 text-lg font-semibold text-[var(--text)]">{education.degree}</h3>
              {'field' in education && education.field ? <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{education.field}</p> : null}
              {'school' in education && education.school ? <p className="mt-4 font-mono text-xs text-[var(--muted)]">{education.school}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl border-t border-[var(--border)] py-20" aria-labelledby="projects-title">
        <p className="font-mono text-sm text-[var(--accent)]">$ ls projects/</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 id="projects-title" className="text-3xl font-semibold tracking-tight text-[var(--text)]">Des expériences transformées en solutions.</h2>
          <span className="font-mono text-xs text-[var(--muted)]">{projects.length} projets documentés</span>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="terminal-card p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-[var(--accent)]">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--text)]">{project.name}</h3>
                </div>
                <span className="rounded-full border border-[var(--border)] px-2.5 py-1 font-mono text-[10px] text-[var(--muted)]">{project.context}</span>
              </div>
              <p className="mt-4 leading-7 text-[var(--muted)]">{project.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                {project.contributions.map((contribution) => <li key={contribution} className="flex gap-2"><span className="text-[var(--success)]">›</span>{contribution}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => <span key={technology} className="rounded-md bg-[var(--surface-strong)] px-2.5 py-1 font-mono text-xs text-[var(--text)]">{technology}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl border-t border-[var(--border)] py-16" aria-labelledby="contact-title">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div><p className="font-mono text-sm text-[var(--accent)]">$ ./contact.sh</p><h2 id="contact-title" className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)]">Construisons quelque chose d’utile.</h2></div>
          <a className="button-secondary" href={`mailto:${profile.email}`}>Envoyer un email <Code2 size={16} /></a>
        </div>
        <p className="mt-5 font-mono text-sm text-[var(--muted)]">{profile.email} · {profile.location}</p>
      </section>

      <footer className="mx-auto flex max-w-6xl justify-between border-t border-[var(--border)] py-6 font-mono text-xs text-[var(--muted)]"><span>© {new Date().getFullYear()} — {profile.name}</span><span>built with curiosity</span></footer>
    </main>
  )
}

export default App
