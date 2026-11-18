export default function Resume() {
  return (
    <section id="resume">
      <h2>Resume &amp; CV</h2>
      <div className="resume-grid up">
        <article className="resume-card">
          <p className="when">1 page</p>
          <h3>Resume</h3>
          <p>A concise overview of my education, technical experience, and selected projects for industry roles.</p>
          <p className="go">
            <a className="btn" href="/Rhutam_Mahajan_one_page_resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="View resume PDF in a new tab">View PDF</a>
            <a href="/Rhutam_Mahajan_one_page_resume.pdf" download aria-label="Download resume PDF">Download PDF</a>
          </p>
        </article>
        <article className="resume-card">
          <p className="when">2 pages</p>
          <h3>Academic CV</h3>
          <p>A fuller account of my research interests, publication, coursework, and technical projects for academic opportunities.</p>
          <p className="go">
            <a className="btn" href="/academic_cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="View academic CV PDF in a new tab">View PDF</a>
            <a href="/academic_cv.pdf" download aria-label="Download academic CV PDF">Download PDF</a>
          </p>
        </article>
      </div>
    </section>
  )
}
