import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";
import { useEffect, useState } from "react";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  // Function to scroll to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Function to scroll to the booking section
  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Track the scroll position to show or hide the scroll-up button
  useEffect(() => {
    const onPageScroll = () => {
      setGoUp(window.pageYOffset > 600);
    };

    window.addEventListener("scroll", onPageScroll);
    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <img className="bg-shape" src={BgShape} alt="background shape" />
        <div className="hero-content">
          <div className="hero-content__text">
            <h4>Discover Your Next Adventure</h4>
            <h1>
              Rent a Car, <span>Explore More</span>
            </h1>
            <p>
              Ready for a road trip? Choose from our fleet of premium cars with
              flexible pick-up options, unlimited miles, and unbeatable rates.
            </p>
            <div className="hero-content__text__btns">
              <Link
                onClick={bookBtn}
                className="hero-content__text__btns__book-ride"
                to="#"
              >
                Book Your Ride &nbsp;
                <i className="fas fa-car-side"></i>{" "}
                {/* Font Awesome car icon */}
              </Link>
              <Link
                className="hero-content__text__btns__learn-more"
                to="/about"
              >
                Learn More &nbsp;
                <i className="fas fa-arrow-right"></i>{" "}
                {/* Font Awesome right arrow icon */}
              </Link>
            </div>
          </div>

          {/* Car image */}
          <img src={HeroCar} alt="car-img" className="hero-content__car-img" />
        </div>
      </div>

      {/* Scroll-up button */}
      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <i className="fas fa-arrow-up"></i> {/* Font Awesome up arrow icon */}
      </div>
    </section>
  );
}

export default Hero;
