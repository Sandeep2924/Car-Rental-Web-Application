import { useState } from "react";

const FAQS = [
  { id: "q1", q: "How do I choose the right rental car for my trip?", a: "Consider the number of passengers, luggage space, fuel efficiency, and road type. For city drives a compact works well; for groups or mountain routes, go for an SUV. Always check the mileage limits and insurance coverage before booking." },
  { id: "q2", q: "What factors affect the price of a rental car?", a: "Price depends on the vehicle type, rental duration, pick-up location, season, and demand. Additional services like GPS, child seats, or insurance add-ons also affect the total. Booking early almost always gets you the best rate." },
  { id: "q3", q: "How can I save money on my rental?", a: "Book early, compare options, and look for promo codes. Choosing an off-airport pickup and a smaller car category can also cut costs significantly. Our loyalty program offers extra discounts on repeat bookings." },
  { id: "q4", q: "What documents do I need to rent a car?", a: "You'll need a valid driving license (at least 1 year old), a government-issued photo ID (Aadhaar/Passport), and a debit or credit card for the security deposit." },
];

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");
  const openQ = (id) => setActiveQ(activeQ === id ? "" : id);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-content">
          <div className="faq-content__title">
            <h5>FAQ</h5>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our car rental services.</p>
          </div>
          <div className="all-questions">
            {FAQS.map(({ id, q, a }) => (
              <div className="faq-box" key={id}>
                <div onClick={() => openQ(id)} className={`faq-box__question ${activeQ === id ? "active-question" : ""}`}>
                  <p>{q}</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className={`faq-box__answer ${activeQ === id ? "active-answer" : ""}`}>{a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
