import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experience.map((e) => (
        <article className="up" key={e.role}>
          <p className="when">{e.when}</p>
          <h3>{e.role}</h3>
          <ul>
            {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          {e.links?.length > 0 && <p className="go">
            {e.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>)}
          </p>}
        </article>
      ))}
    </section>
  )
}
