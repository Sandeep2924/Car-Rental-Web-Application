import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <section className="choose-section">
      <div className="container">
        <div className="choose-container">
          <img className="choose-container__img" src={MainImg} alt="car" />
          <div className="text-container">
            <div className="text-container__left">
              <h4>Why Choose Us?</h4>
              <h2>Unbeatable Deals That Save You More</h2>
              <p>We deliver exceptional car rental experiences with transparent pricing, a diverse fleet, and dedicated support — so every journey is stress-free and memorable.</p>
              <a href="#home">Explore More &nbsp;<i className="fa-solid fa-angle-right"></i></a>
            </div>
            <div className="text-container__right">
              <div className="text-container__right__box">
                <img src={Box1} alt="road trips" />
                <div className="text-container__right__box__text">
                  <h4>Epic Road Trips</h4>
                  <p>Premium vehicles built for scenic routes, mountain passes, and coast-to-coast adventures across India.</p>
                </div>
              </div>
              <div className="text-container__right__box">
                <img src={Box2} alt="transparent pricing" />
                <div className="text-container__right__box__text">
                  <h4>Transparent Pricing</h4>
                  <p>No hidden fees, no surprises. The price you see at booking is exactly what you pay at the counter.</p>
                </div>
              </div>
              <div className="text-container__right__box">
                <img src={Box3} alt="24/7 support" />
                <div className="text-container__right__box__text">
                  <h4>24/7 Support</h4>
                  <p>Our dedicated team is available around the clock to assist with any issue on the road.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
