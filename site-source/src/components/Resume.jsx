const documents = [
  {
    title: 'Data Science',
    label: 'data science resume',
    category: 'Industry resume',
    description: 'For data analyst and data scientist roles, with an emphasis on analysis, modeling, and evaluation.',
    href: '/Rhutam_Mahajan_Data_Science_Resume.pdf',
  },
  {
    title: 'Data Engineering',
    label: 'data engineering resume',
    category: 'Industry resume',
    description: 'For data engineering roles focused on SQL, data pipelines, and database systems.',
    href: '/Rhutam_Mahajan_Data_Engineering_Resume.pdf',
  },
  {
    title: 'AI / ML Engineering',
    label: 'AI and ML engineering resume',
    category: 'Industry resume',
    description: 'For AI and machine learning engineering roles, with an emphasis on model development and applications.',
    href: '/Rhutam_Mahajan_AI_ML_Engineering_Resume.pdf',
  },
  {
    title: 'Academic CV',
    label: 'academic CV',
    category: 'Research and academic roles',
    description: 'My research interests, publication, coursework, and technical projects for academic opportunities.',
    href: '/academic_cv.pdf',
  },
]

export default function Resume() {
  return (
    <section id="resume">
      <h2>Resumes &amp; CV</h2>
      <div className="resume-grid up">
        {documents.map((document) => (
          <article className="resume-card" key={document.href}>
            <p className="when">{document.category}</p>
            <h3>{document.title}</h3>
            <p>{document.description}</p>
            <p className="go">
              <a className="btn" href={document.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${document.label} PDF in a new tab`}>View PDF</a>
              <a href={document.href} download aria-label={`Download ${document.label} PDF`}>Download PDF</a>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
