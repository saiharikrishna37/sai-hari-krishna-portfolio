function Projects() {
  const projects = [
    {
      number: "01",
      title: "SUPERMARKET SALES",
      type: "POWER BI",
      description:
        "Interactive sales dashboard to analyze revenue, products, categories and business performance.",
      tools: "Excel • Power BI",
      link: "https://github.com/saiharikrishna37/SuperMarket-Sales-Analysis-powerbi-project",
    },
    {
      number: "02",
      title: "BIKE SALES ANALYSIS",
      type: "EXCEL + POWER BI",
      description:
        "Sales analysis project focused on customer insights, product performance and sales trends.",
      tools: "Excel • Power BI",
      link: "https://github.com/saiharikrishna37/Bike-Sales-Analysis-PowerBI-Project",
    },
    {
      number: "03",
      title: "NYC YELLOW TAXI",
      type: "DATA ANALYSIS",
      description:
        "Data cleaning and analysis of taxi trip data to discover patterns and meaningful insights.",
      tools: "Python • Pandas • Power BI",
      link: "https://github.com/saiharikrishna37/Nyc_Taxi_Trip_Analysis",
    },
    {
      number: "04",
      title: "RISING WATERS",
      type: "PYTHON + JUPYTER NOTEBOOK + STREAMLIT",
      description:
        "Multi-dashboard analytics project covering revenue, performance and business insights.",
      tools: "PYTHON • JUPYTER NOTEBOOK • STREAMLIT",
      link: "https://github.com/saiharikrishna37/Rising-Waters",
    },
  ]

  return (
    <section id="projects" className="projects">

      <div className="projects-heading">
        <p>03 — PROJECTS</p>

        <h2>
          MY <span>WORK</span>
        </h2>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.number}>

            <div className="project-top">
              <span>{project.number}</span>
              <span>{project.type}</span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tools">
              {project.tools}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              VIEW PROJECT →
            </a>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects