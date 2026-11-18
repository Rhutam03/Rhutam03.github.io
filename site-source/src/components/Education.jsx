import { education } from '../data'

export default function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      {education.map((e) => (
        <article className="up" key={e.title}>
          <p className="when">{e.when}</p>
          <h3>{e.title}</h3>
          <p>{e.note}</p>
        </article>
      ))}
    </section>
  )
}
