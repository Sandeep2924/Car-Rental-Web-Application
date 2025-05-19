import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Get Ready for Your Adventure</h3>
              <h2>Seamless Car Rental Experience</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="Select Car" />
                <h3>Choose Your Ride</h3>
                <p>
                  Explore our extensive selection of cars, from compact city
                  cars to spacious SUVs. Find the perfect ride for your trip.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="Contact Operator" />
                <h3>Connect with Our Team</h3>
                <p>
                  Need assistance? Our dedicated support team is always here to
                  provide help and answer all your queries with a smile.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="Let's Drive" />
                <h3>Hit the Road</h3>
                <p>
                  With your car ready to go, enjoy the freedom of the open road
                  and make unforgettable memories with every drive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
