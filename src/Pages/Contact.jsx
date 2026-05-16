import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Reach Out to Us</h2>
              <p>We're here to assist with any questions. With over 15 years of industry experience and a commitment to excellent service, we're your trusted car rental partner in India.</p>
              <a href="tel:+919876543210"><i className="fa-solid fa-phone"></i> +91 98765 43210</a>
              <a href="mailto:hello@zoomcarz.in"><i className="fa-solid fa-envelope"></i> hello@zoomcarz.in</a>
              <a href="https://maps.google.com/?q=Sector+22B,+Chandigarh" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-location-dot"></i> 123, Sector 22B, Chandigarh, 160022
              </a>
            </div>
            <div className="contact-div__form">
              <form onSubmit={(e) => e.preventDefault()}>
                <label>Full Name <b>*</b></label>
                <input type="text" placeholder='E.g. "Ravi Kumar"' required />
                <label>Email <b>*</b></label>
                <input type="email" placeholder="you@example.com" required />
                <label>Message <b>*</b></label>
                <textarea placeholder="Write your message here..." required></textarea>
                <button type="submit"><i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span><i className="fa-solid fa-phone"></i><h3>+91 98765-43210</h3></span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
