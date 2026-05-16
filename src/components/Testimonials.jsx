import React, { useState, useEffect } from "react";
import img1 from "../images/testimonials/pexels-artempodrez-7956488.jpg";
import img2 from "../images/testimonials/pexels-carocastilla-1716861.jpg";
import img3 from "../images/testimonials/pexels-ketut-subiyanto-4909509.jpg";
import img4 from "../images/testimonials/pexels-krivitskiy-1188971.jpg";
import img5 from "../images/testimonials/pexels-lanius-2020911.jpg";

const reviews = [
  { name: "Ravi Sharma", location: "Delhi", review: "Absolutely seamless booking experience! The car was spotless and the support team was incredibly helpful throughout. Will definitely book again for my next trip.", img: img1 },
  { name: "Priya Mehta", location: "Mumbai", review: "Great pricing with zero hidden fees — exactly as promised. The Fortuner I rented was in perfect condition. Highly recommend ZoomCarz to anyone!", img: img2 },
  { name: "Arjun Nair", location: "Bengaluru", review: "I was impressed by how smooth the whole process was. Picked up the car in 10 minutes, drove across Goa without any issues. 5 stars!", img: img3 },
  { name: "Sneha Verma", location: "Pune", review: "Outstanding customer service. When I had a flat tyre, their team reached me within 30 minutes. That kind of support is rare. Truly 24/7!", img: img4 },
  { name: "Karan Singh", location: "Chandigarh", review: "Rented a BMW 5 Series for my anniversary trip. It was immaculate and the drive was incredible. ZoomCarz delivered a premium experience.", img: img5 },
];

const CustomerReviewsSlider = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setIdx(i => (i + 1) % reviews.length), 5000);
    return () => clearInterval(iv);
  }, []);

  const cur  = reviews[idx];
  const next = reviews[(idx + 1) % reviews.length];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-content__title">
            <h4>What Our Customers Say</h4>
            <h2>Client Testimonials</h2>
            <p>Real stories from real customers who've explored India with ZoomCarz.</p>
          </div>
          <div className="all-testimonials">
            {[cur, next].map((r, i) => (
              <div key={i} className={`all-testimonials__box ${i === 0 ? "left" : "right"}`}>
                <p style={{ fontSize: "0.95rem" }}>{r.review}</p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={r.img} alt={r.name} className="testimonial-img" />
                    <span>
                      <h4>{r.name}</h4>
                      <p>{r.location}</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSlider;
