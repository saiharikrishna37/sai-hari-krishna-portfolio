function About() {
  return (
    <section id="about" className="about">

      <div className="about-heading">
        <p>01 — ABOUT ME</p>

        <h2>
          DATA
          <span> PROFILE</span>
        </h2>
      </div>

      <div className="about-content">

        <div className="about-text">

          <p>
            I am a passionate Data Analyst and AI enthusiast who enjoys
            transforming raw data into meaningful insights and intelligent
            solutions.
          </p>

          <p>
            I work with tools such as Python, SQL, Excel, Power BI and
            Tableau to clean, analyze and visualize data.
          </p>

        </div>

        <div className="about-stats">

          <div className="stat-card">
            <span>ROLE</span>
            <strong>DATA ANALYST</strong>
          </div>

          <div className="stat-card">
            <span>FOCUS</span>
            <strong>DATA + AI</strong>
          </div>

          <div className="stat-card">
            <span>TOOLS</span>
            <strong>PYTHON • SQL</strong>
          </div>

          <div className="stat-card">
            <span>VISUALIZATION</span>
            <strong>POWER BI</strong>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About