import { projects } from '../data'

export default function Projects() {
  return (
    <section id="work">
      <h2>Selected projects</h2>
      {projects.map((p) => (
        <article className="up" key={p.title}>
          <p className="when">{p.when}</p>
          <p className="project-context">{p.context}</p>
          <h3>{p.title}</h3>
          <ul>
            {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <p className="kit">{p.kit}</p>
          {p.links.length > 0 && <p className="go">
            {p.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
            ))}
          </p>}
        </article>
      ))}
    </section>
  )
}
