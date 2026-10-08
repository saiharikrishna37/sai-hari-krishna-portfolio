import profile from "../assets/image.jpeg"
function Home() {
  return (
    <section className="home">

      <div className="home-content">

        <p className="home-small">
          HELLO, I'M
        </p>

        <h1>
          SAI HARI
          <br />
          KRISHNA
        </h1>

        <h2>
          DATA ANALYST
          <span> × </span>
          AI ENTHUSIAST
        </h2>

        <p className="home-description">
          Turning data into insights and ideas into intelligent solutions.
        </p>

        <div className="home-buttons">

          <button
  className="explore-btn"
  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    })
  }}
>
  EXPLORE MY WORK
  <span>↓</span>
</button>

          <button
  className="outline-btn"
  onClick={() =>
    window.open("https://github.com/saiharikrishna37", "_blank")
  }
>
  VIEW GITHUB
</button>
          <button
  className="outline-btn"
  onClick={() =>
    window.open("https://www.linkedin.com/in/sai-hari-krishna-mudraboina", "_blank")
  }
>
  LINKEDIN
</button>

        </div>

      </div>

      <div className="home-visual">

        <div className="profile-orbit orbit-one"></div>
        <div className="profile-orbit orbit-two"></div>

        <div className="profile-placeholder">
  <img
    src={profile}
    alt="Sai Hari Krishna"
  />
</div>

        <div className="floating-tech tech-python">
          PYTHON
        </div>

        <div className="floating-tech tech-sql">
          SQL
        </div>

        <div className="floating-tech tech-powerbi">
          POWER BI
        </div>

        <div className="floating-tech tech-ai">
          AI
        </div>

      </div>

    </section>
  )
}

export default Home