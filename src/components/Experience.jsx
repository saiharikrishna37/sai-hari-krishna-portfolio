function Experience() {
  const experiences = [
    {
      number: "01",
      role: "DATA ANALYTICS INTERN",
      company: "CODTECH IT SOLUTIONS",
      description:
        "Worked on data analysis, machine learning and Power BI dashboard development using real-world datasets.",
      tools: "Python • Machine Learning • Power BI",
    },
    {
      number: "02",
      role: "TABLEAU INTERN",
      company: "TOYCRAFT TALES",
      description:
        "Explored data and created visual analytics solutions using Tableau to communicate meaningful insights.",
      tools: "Tableau • Data Visualization",
    },
    {
      number: "03",
      role: "DATA ANALYTICS INTERN",
      company: "SMARTBRIDGE",
      description:
        "Worked on the Rising Waters project involving data analysis and problem-solving through multiple project tasks.",
      tools: "Data Analytics • Python • Power BI",
    },
    {
      number: "04",
      role: "SERVICENOW INTERN",
      company: "SERVICENOW",
      description:
        "Completed internship learning modules and explored ServiceNow platform concepts and workflows.",
      tools: "ServiceNow • Cloud",
    },
  ]

  return (
    <section id="experience" className="experience">

      <div className="experience-heading">
        <p>04 — EXPERIENCE</p>

        <h2>
          MY <span>JOURNEY</span>
        </h2>
      </div>

      <div className="experience-track">

        {experiences.map((experience) => (
          <div
            className="experience-card"
            key={experience.number}
          >

            <div className="experience-card-top">
              <span>{experience.number}</span>
              <div className="experience-dot"></div>
            </div>

            <p className="experience-role">
              {experience.role}
            </p>

            <h3>{experience.company}</h3>

            <p className="experience-description">
              {experience.description}
            </p>

            <span className="experience-tools">
              {experience.tools}
            </span>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Experience