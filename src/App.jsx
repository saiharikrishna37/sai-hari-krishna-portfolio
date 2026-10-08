import { useEffect, useState } from "react"
import "./App.css"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import AIData from "./components/AIData"
import Experience from "./components/Experience"
import Certifications from "./components/Certifications"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"


function App() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])
  

  return (
    <main className="portfolio">

      {showIntro ? (
        <section className="intro">

          <div className="data-grid"></div>

          <div className="analytics-network">
            <span className="node node-1"></span>
            <span className="node node-2"></span>
            <span className="node node-3"></span>
            <span className="node node-4"></span>
            <span className="node node-5"></span>

            <span className="network-line line-1"></span>
            <span className="network-line line-2"></span>
            <span className="network-line line-3"></span>
            <span className="network-line line-4"></span>
          </div>

          <div className="mini-chart line-chart">
            <div className="chart-label">TREND</div>

            <svg viewBox="0 0 220 100">
              <polyline points="5,80 35,60 65,70 95,35 125,50 155,20 185,35 215,10" />
            </svg>
          </div>

          <div className="mini-chart bar-chart">
            <div className="chart-label">ANALYSIS</div>

            <div className="bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="scatter-chart">
            <div className="chart-label">DATA POINTS</div>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="analysis-label label-sql">SQL</div>
          <div className="analysis-label label-python">PYTHON</div>
          <div className="analysis-label label-powerbi">POWER BI</div>
          <div className="analysis-label label-ai">AI</div>

          <div className="glow-orb"></div>

          <div className="intro-content">
            <p className="intro-small">
              WELCOME TO
            </p>

            <h1>
              MY PORTFOLIO
            </h1>

            <p className="intro-role">
              DATA ANALYST × AI
            </p>
          </div>

          <div className="scroll-line"></div>

        </section>
      ) : (

        <div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <AIData />
          <Experience />
          <Certifications />
          <Resume />
          <Contact />
         </div>

      )}

    </main>
  )
}

export default App