
import "./ContactPage.css";

function ContactPage() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Your message form has been submitted.");
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-tag">WE ARE HERE FOR YOU</p>
        <h1>Get in Touch</h1>
        <p>
          Have a question or need assistance?
          We would love to hear from you.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            Reach out to our team for enquiries,
            appointments, or general assistance.
          </p>

          <div className="contact-detail">
            <span className="contact-icon">✉</span>
            <div>
              <h3>Email Us</h3>
              <p>support@medic.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">☎</span>
            <div>
              <h3>Call Us</h3>
              <p>Contact our support team</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">⌖</span>
            <div>
              <h3>Our Location</h3>
              <p>Visit us at our healthcare centre</p>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <h2>Send Us a Message</h2>

          <label htmlFor="contact-name">Full Name</label>
          <input
            id="contact-name"
            type="text"
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="contact-email">Email Address</label>
          <input
            id="contact-email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            type="text"
            placeholder="How can we help?"
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            rows="5"
            placeholder="Write your message here..."
            required
          />

          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default ContactPage;
