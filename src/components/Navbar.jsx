import { useEffect, useState } from "react"

function Navbar() {
  const [activeSection, setActiveSection] = useState("home")

  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "ai-data",
    "experience",
    "certifications",
    "resume",
    "contact",
  ]

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180

      let currentSection = "home"

      sections.forEach((id) => {
        const section = document.getElementById(id)

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className="navbar">

      <div
        className="navbar-logo"
        onClick={() => scrollToSection("home")}
      >
        SHK<span>.</span>
      </div>

      <div className="navbar-links">

        <button
  className={activeSection === "home" ? "active" : ""}
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }}
>
  HOME
</button>

        <button
          className={activeSection === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          ABOUT
        </button>

        <button
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => scrollToSection("skills")}
        >
          SKILLS
        </button>

        <button
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => scrollToSection("projects")}
        >
          PROJECTS
        </button>

        <button
  className={activeSection === "ai-data" ? "active" : ""}
  onClick={() => scrollToSection("ai-data")}
>
  AI + DATA
</button>

        <button
          className={activeSection === "experience" ? "active" : ""}
          onClick={() => scrollToSection("experience")}
        >
          EXPERIENCE
        </button>

        <button
          className={activeSection === "certifications" ? "active" : ""}
          onClick={() => scrollToSection("certifications")}
        >
          CERTIFICATIONS
        </button>

        <button
          className={activeSection === "resume" ? "active" : ""}
          onClick={() => scrollToSection("resume")}
        >
          RESUME
        </button>

        <button
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => scrollToSection("contact")}
        >
          CONTACT
        </button>

      </div>

    </nav>
  )
}

export default Navbar