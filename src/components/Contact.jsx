function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-heading">
        <p>06 — CONTACT</p>

        <h2>
          LET'S <span>CONNECT</span>
        </h2>

        <p className="contact-subtitle">
          Have a project, opportunity or idea?
          Let's turn data into something meaningful.
        </p>
      </div>

      <div className="contact-content">
        
        <div className="contact-info">

          <div className="contact-item">
            <span>EMAIL</span>
            <strong>mudraboinasaiharikrishna@gmail.com</strong>
          </div>

          <div className="contact-item">
            <span>GITHUB</span>
            <strong>github.com/saiharikrishna37</strong>
          </div>

          <div className="contact-item">
            <span>LINKEDIN</span>
            <strong>linkedin.com/in/sai-hari-krishna-mudraboina</strong>
          </div>

        </div>

        <div className="contact-message">

         
          <h3>
            DATA → INSIGHTS
          </h3>

          <p>
            Let's build intelligent solutions
            through data and AI.
          </p>

          <button
  className="contact-btn"
  onClick={() => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=mudraboinasaiharikrishna@gmail.com",
      "_blank"
    )
  }}
>
  GET IN TOUCH →
</button>
        </div>

      </div>

      <div className="contact-footer">
        <span>SAI HARI KRISHNA</span>
        <span>DATA ANALYST × AI</span>
      </div>

    </section>
  )
}

export default Contact