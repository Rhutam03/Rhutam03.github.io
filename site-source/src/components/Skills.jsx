import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="up">
        {skills.map((g) => (
          <div className="grp" key={g.label}>
            <h3>{g.label}</h3>
            <p>
              {g.items.map(([name], i) => (
                <span key={name}>
                  {name}
                  {i < g.items.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
