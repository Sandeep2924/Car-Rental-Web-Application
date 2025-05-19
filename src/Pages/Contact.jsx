import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import "../dist/Contact_style.css";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Reach Out to Us</h2>
              <p>
                We’re here to assist you with any questions or concerns. With a
                commitment to excellent service and over 15 years of industry
                experience, we’re your trusted partner in car rentals.
              </p>
              <a href="tel:+91 98765 43210">
                <i className="fa-solid fa-phone"></i>&nbsp; +91 98765 43210
              </a>
              <a href="mailto:ZoomCarz@gmail.com">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                ZoomCarz@gmail.com
              </a>
              <a
                href="https://maps.google.com/?q=Sector
                22B, Chandigarh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>&nbsp; 123, Sector
                22B, Chandigarh, 160022, India.
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder='E.g: "Joe Shmoe"'
                  required
                ></input>

                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  required
                ></input>

                <label>
                  Message <b>*</b>
                </label>
                <textarea placeholder="Write Here.." required></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>+91 98765-43210</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
