import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img className="about-main__img" src={AboutMain} alt="about-us" />
            <div className="about-main__text">
              <h3>Welcome to Our Company</h3>
              <h2>Your journey begins with us</h2>
              <p>
                At our core, we believe in delivering exceptional experiences
                that make every journey memorable. Whether you're exploring
                scenic routes or navigating city streets, our commitment to
                quality and customer satisfaction drives everything we do.
              </p>
              <p>
                With a diverse fleet of vehicles, a growing network of rental
                outlets, and dedicated repair services, we ensure a seamless
                experience from start to finish. Trust us to be your partner in
                every adventure.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-types-icon" />
                  <span>
                    <h4>25+</h4>
                    <p>Vehicle Options</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="rental-outlets-icon" />
                  <span>
                    <h4>100+</h4>
                    <p>Rental Locations</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="repair-shop-icon" className="last-fk" />
                  <span>
                    <h4>80+</h4>
                    <p>Service Centers</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Get in Touch and Start Your Adventure</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>+91 98765-43210</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
