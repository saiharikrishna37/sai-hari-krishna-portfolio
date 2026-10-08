function AIData() {
  const features = [
    {
      number: "01",
      title: "DATA ANALYSIS",
      description:
        "Transforming raw datasets into meaningful insights using Python, SQL and Excel.",
      tools: "PYTHON • SQL • EXCEL",
    },
    {
      number: "02",
      title: "DATA VISUALIZATION",
      description:
        "Creating interactive dashboards and visual stories that make complex data easy to understand.",
      tools: "POWER BI • TABLEAU",
    },
    {
      number: "03",
      title: "MACHINE LEARNING",
      description:
        "Exploring machine learning techniques to identify patterns and build intelligent solutions.",
      tools: "PYTHON • ML • PANDAS",
    },
    {
      number: "04",
      title: "AI SOLUTIONS",
      description:
        "Combining data analytics and AI to develop practical and intelligent applications.",
      tools: "AI • PYTHON • DATA",
    },
  ]

  return (
    <section id="ai-data" className="ai-data">

      <div className="ai-data-heading">
        <p>06 — AI + DATA</p>

        <h2>
          DATA <span>MEETS AI</span>
        </h2>

        <p className="ai-data-subtitle">
          Combining analytics, visualization and artificial intelligence
          to transform data into intelligent solutions.
        </p>
      </div>

      <div className="ai-data-grid">

        {features.map((feature) => (
          <div className="ai-data-card" key={feature.number}>

            <div className="ai-data-number">
              {feature.number}
            </div>

            <div className="ai-data-icon">
              ◈
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <span>{feature.tools}</span>

          </div>
        ))}

      </div>

      <div className="ai-data-core">
        <div className="core-ring ring-1"></div>
        <div className="core-ring ring-2"></div>

        <div className="core-center">
          <span>DATA</span>
          <strong>+</strong>
          <span>AI</span>
        </div>
      </div>

    </section>
  )
}

export default AIData