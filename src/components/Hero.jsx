import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";
import { useEffect, useState } from "react";

function Hero() {
  const [goUp, setGoUp] = useState(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const bookBtn = () => document.querySelector("#booking-section")?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const onPageScroll = () => setGoUp(window.pageYOffset > 600);
    window.addEventListener("scroll", onPageScroll);
    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <img className="bg-shape" src={BgShape} alt="" />
        <div className="hero-content">
          <div className="hero-content__text">
            <div className="hero-badge"><i className="fa-solid fa-star"></i> India's #1 Car Rental</div>
            <h1>Rent a Car,<br /><span>Own the Road</span></h1>
            <p>Choose from our premium fleet — from city hatchbacks to luxury SUVs. Transparent pricing, zero hidden fees, and 24/7 support across India.</p>
            <div className="hero-content__text__btns">
              <Link onClick={bookBtn} className="hero-content__text__btns__book-ride" to="#">
                Book Your Ride &nbsp;<i className="fas fa-car-side"></i>
              </Link>
              <Link className="hero-content__text__btns__learn-more" to="/about">
                Learn More &nbsp;<i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><h3>25+</h3><p>Vehicle Models</p></div>
              <div className="hero-stat"><h3>100+</h3><p>Locations</p></div>
              <div className="hero-stat"><h3>50K+</h3><p>Happy Customers</p></div>
            </div>
          </div>
          <img src={HeroCar} alt="premium car" className="hero-content__car-img" />
        </div>
      </div>
      <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </section>
  );
}

export default Hero;
