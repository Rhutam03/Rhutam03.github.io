export default function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Rhutam Mahajan</span>
      <div className="footer-links">
        <a href="mailto:rhutammahajan@gmail.com">Email</a>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}
