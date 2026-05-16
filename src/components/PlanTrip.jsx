import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <section className="plan-section">
      <div className="container">
        <div className="plan-container">
          <div className="plan-container__title">
            <h3>How It Works</h3>
            <h2>Seamless Car Rental in 3 Steps</h2>
          </div>
          <div className="plan-container__boxes">
            <div className="plan-container__boxes__box">
              <img src={SelectCar} alt="Choose car" />
              <h3>1. Choose Your Ride</h3>
              <p>Browse our fleet of 25+ vehicles — from compact hatchbacks to premium SUVs — and pick what fits your trip perfectly.</p>
            </div>
            <div className="plan-container__boxes__box">
              <img src={Contact} alt="Contact us" />
              <h3>2. Book &amp; Confirm</h3>
              <p>Fill in your details, select pick-up and drop-off, and receive your rental voucher instantly on your email.</p>
            </div>
            <div className="plan-container__boxes__box">
              <img src={Drive} alt="Hit the road" />
              <h3>3. Hit the Road</h3>
              <p>Pick up your car and enjoy the journey. Our 24/7 support team is always a call away for any assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanTrip;
