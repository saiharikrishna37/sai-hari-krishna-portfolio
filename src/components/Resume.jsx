import resume from "../assets/updated resume.pdf"

function Resume() {
  return (
    <section id="resume" className="resume">

      <div className="resume-content">

        <p className="resume-number">
          07 — RESUME
        </p>

        <h2>
          MY <span>RESUME</span>
        </h2>

        <p className="resume-quote">
          "Turning data into insights,
          and insights into impact."
        </p>

        <p className="resume-description">
          Explore my academic background, technical skills,
          projects, internships and professional journey.
        </p>

        <div className="resume-actions">

          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="resume-view-btn"
          >
            VIEW RESUME →
          </a>

          <a
            href={resume}
            download="Sai-Hari-Krishna-Resume.pdf"
            className="resume-download-btn"
          >
            DOWNLOAD PDF
          </a>

        </div>

      </div>

      <div className="resume-visual">

        <div className="resume-ring ring-one"></div>
        <div className="resume-ring ring-two"></div>

        <div className="resume-icon">
          <span>CV</span>
        </div>

        <div className="resume-label label-data">
          DATA
        </div>

        <div className="resume-label label-ai">
          AI
        </div>

        <div className="resume-label label-analytics">
          ANALYTICS
        </div>

      </div>

    </section>
  )
}

export default Resume