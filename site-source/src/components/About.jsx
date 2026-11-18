export default function About() {
  return (
    <section id="about">
      <div className="bio">
        <img className="me" src="/profile.jpg" alt="Rhutam Mahajan" width="200" height="200" />
        <h1>Rhutam Mahajan</h1>
        <p className="eyebrow">M.S. Data Science · University of Maryland</p>
        <p className="availability">Graduating May 2027 · College Park, MD</p>
        <div className="bio-text">
          <p>
            I work on SQL analysis, data pipelines, and machine learning applications. I&apos;m seeking full-time opportunities in data science, data engineering, and AI/ML after graduation, and I&apos;m open to opportunities across the United States.
          </p>
          <p>
            My projects range from business intelligence dashboards and Spark workflows to few-shot plant classification and a multimodal image and metadata prototype. My research interests include few-shot and multimodal learning.
          </p>
        </div>
        <p className="go hero-actions">
          <a className="btn" href="/Rhutam_Mahajan_Data_Science_Resume.pdf" target="_blank" rel="noopener noreferrer">View data science resume</a>
          <a href="/academic_cv.pdf" target="_blank" rel="noopener noreferrer">Academic CV</a>
          <a href="mailto:rhutammahajan@gmail.com">Get in touch</a>
        </p>
        <p className="say">
          <a href="https://github.com/Rhutam03" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/rhutammahajan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
  )
}
