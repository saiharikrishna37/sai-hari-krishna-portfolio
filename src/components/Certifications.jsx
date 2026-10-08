function Certifications() {
  const certifications = [
    {
      number: "01",
      title: "PYTHON (BASIC)",
      platform: "HACKERRANK",
      skills: "Python • Programming Fundamentals",
    },
    {
      number: "02",
      title: "DATA SCIENCE & ANALYTICS",
      platform: "HP LIFE",
      skills: "Data Science • Analytics",
    },
    {
      number: "03",
      title: "INTRODUCTION TO MICROSOFT EXCEL",
      platform: "COURSERA",
      skills: "Excel • Data Analysis",
    },
    {
      number: "04",
      title: "SQL FOR DATA ANALYSIS",
      platform: "SIMPLILEARN",
      skills: "SQL • Data Analysis",
    },
  ]

  return (
    <section id="certifications" className="certifications">

      <div className="certifications-heading">
        <p>05 — CERTIFICATIONS</p>

        <h2>
          MY <span>CREDENTIALS</span>
        </h2>

        <p className="certifications-subtitle">
          Certifications that strengthen my foundation in
          Python, Data Science, Excel and SQL.
        </p>
      </div>

      <div className="certifications-grid">

        {certifications.map((certificate) => (
          <div
            className="certificate-card"
            key={certificate.number}
          >

           <div className="certificate-top">
  <span>{certificate.number}</span>

  <div className="certificate-status">
    <div className="certificate-icon">
      ✓
    </div>

    <span>VERIFIED</span>
  </div>
</div>
            <p className="certificate-platform">
              {certificate.platform}
            </p>

            <h3>{certificate.title}</h3>

            <span className="certificate-skills">
              {certificate.skills}
            </span>

            

          </div>
        ))}

      </div>

    </section>
  )
}

export default Certifications