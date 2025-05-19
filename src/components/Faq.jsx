import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Find quick answers to common questions about our car rental
                services and booking process.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. How do I choose the right rental car for my trip?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  To choose the right rental car, consider factors like the
                  number of passengers, luggage space, fuel efficiency, and the
                  type of terrain you’ll be driving on. If you're traveling in a
                  group, a larger car or SUV might be necessary. For city
                  driving, a compact car could be more practical. Always check
                  the rental terms for mileage limits and insurance coverage.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. What factors affect the price of a rental car?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  The price of a rental car is influenced by several factors,
                  including the type of car, the rental location, the duration
                  of the rental, and the time of booking. Rental prices can also
                  vary based on the season, demand, and any additional services
                  like insurance, GPS, or child seats. It's always a good idea
                  to book early and compare prices across multiple platforms.
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. How can I save on rental car prices?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  To save on rental car prices, book early to secure lower
                  rates. Compare prices across multiple rental companies using
                  comparison sites like Kayak, Expedia, or Travelocity.
                  Additionally, search for discount codes and special offers
                  online. Opting for an off-airport pickup location or choosing
                  a smaller car model can also help reduce costs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
