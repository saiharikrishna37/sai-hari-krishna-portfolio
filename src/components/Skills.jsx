function Skills() {
  const skills = [
    {
      category: "DATA ANALYSIS",
      items: ["Python", "SQL", "Excel"],
    },
    {
      category: "VISUALIZATION",
      items: ["Power BI", "Tableau"],
    },
    {
      category: "DATA TOOLS",
      items: ["Pandas", "NumPy", "Matplotlib"],
    },
    {
      category: "AI / ML",
      items: ["Machine Learning", "AI", "PySpark"],
    },
  ]

  return (
    <section id="skills" className="skills">

      <div className="skills-heading">
        <p>02 — SKILLS</p>

        <h2>
          MY <span>TECH STACK</span>
        </h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-number">
              0{index + 1}
            </div>

            <h3>{skill.category}</h3>

            <div className="skill-items">
              {skill.items.map((item, itemIndex) => (
                <span key={itemIndex}>
                  {item}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills