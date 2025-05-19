import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us?</h4>
                <h2>Unbeatable Deals That Save You More</h2>
                <p>
                  Explore incredible offers that bring you the best value
                  without compromising on quality. We are committed to offering
                  you amazing deals, ensuring that you get premium services and
                  products at prices that make sense. Whether you're looking to
                  rent or buy, our carefully crafted offers are designed to give
                  you an unmatched experience. Don’t miss the chance to grab
                  these fantastic savings today!
                </p>
                <a href="#home">
                  Explore More &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Epic Road Trips</h4>
                    <p>
                      Elevate your road trip experience with our premium
                      vehicles, perfect for exploring scenic routes across the
                      country.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Transparent Pricing</h4>
                    <p>
                      Say goodbye to hidden fees. With our clear, all-inclusive
                      pricing, what you see is exactly what you pay.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>100% Transparent Costs</h4>
                    <p>
                      No surprises, no hidden fees. Enjoy complete transparency
                      with every booking and experience stress-free pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
