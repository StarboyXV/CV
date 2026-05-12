import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <p>I'd love to hear from you. Feel free to reach out!</p>
          <div className="contact-links">
            <a href="mailto:thapelo.moletsane0@gmail.com" className="contact-link">
              📧 Email
            </a>
            <a href="https://www.linkedin.com/in/thapelo-moletsane-a16079129/" className="contact-link" target="_blank">
              💼 LinkedIn
            </a>
            <a href="https://github.com/StarboyXV?tab=repositories" className="contact-link" target="_blank">
              💻 GitHub
            </a>
            <a href="tel:+27812629051" className="contact-link">
              📱 Phone
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
