import React, { useState, useEffect } from "react";
import img1 from "../images/testimonials/pexels-artempodrez-7956488.jpg";
import img2 from "../images/testimonials/pexels-carocastilla-1716861.jpg";
import img3 from "../images/testimonials/pexels-ketut-subiyanto-4909509.jpg";
import img4 from "../images/testimonials/pexels-krivitskiy-1188971.jpg";
import img5 from "../images/testimonials/pexels-lanius-2020911.jpg";

import "../dist/testimonials_style.css";

const CustomerReviewsSlider = () => {
  const reviews = [
    {
      name: "Jessica Brown",
      location: "New York",
      review:
        "I had a wonderful experience renting a car through this service. The process was smooth, and the staff was extremely helpful. Will definitely use them again!",
      img: img1, // Image import reference
    },
    {
      name: "Michael Johnson",
      location: "Los Angeles",
      review:
        "The booking experience was incredibly easy and the car was in excellent condition. I highly recommend this service to anyone looking for a reliable car rental option.",
      img: img2, // Image import reference
    },
    {
      name: "Sarah Williams",
      location: "Chicago",
      review:
        "I had an amazing experience renting from this company. The car was spotless, and the customer service was excellent. Highly recommend for anyone in need of a rental car!",
      img: img3, // Image import reference
    },
    {
      name: "John Doe",
      location: "Miami",
      review:
        "This service was top-notch. Easy to book and the car was in pristine condition. I would definitely recommend to anyone looking for a hassle-free rental experience.",
      img: img4, // Image import reference
    },
    {
      name: "Jane Smith",
      location: "San Francisco",
      review:
        "The staff was friendly, and the car was just what we needed for our road trip. Great pricing and service. Will definitely rent from here again!",
      img: img5, // Image import reference
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= reviews.length ? 0 : nextIndex;
      });
    }, 5000); // Change reviews every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [reviews.length]);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-content__title">
            <h4>What Our Customers Say</h4>
            <h2>Client Testimonials</h2>
            <p>
              Read what our clients have to say about their experience with us.
              We take pride in providing exceptional service, and our clients'
              positive feedback speaks volumes.
            </p>
          </div>

          <div className="all-testimonials">
            {/* Left Review */}
            <div className="all-testimonials__box left">
              <p style={{ fontSize: "2rem" }}>
                {reviews[currentReviewIndex].review}
              </p>
              <div className="all-testimonials__box__name">
                <div className="all-testimonials__box__name__profile">
                  <img
                    src={reviews[currentReviewIndex].img}
                    alt="user_img"
                    className="testimonial-img"
                  />
                  <span>
                    <h4>{reviews[currentReviewIndex].name}</h4>
                    <p>{reviews[currentReviewIndex].location}</p>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Review */}
            <div className="all-testimonials__box right">
              <p style={{ fontSize: "2rem" }}>
                {reviews[(currentReviewIndex + 1) % reviews.length].review}
              </p>
              <div className="all-testimonials__box__name">
                <div className="all-testimonials__box__name__profile">
                  <img
                    src={reviews[(currentReviewIndex + 1) % reviews.length].img}
                    alt="user_img"
                    className="testimonial-img"
                  />
                  <span>
                    <h4>
                      {reviews[(currentReviewIndex + 1) % reviews.length].name}
                    </h4>
                    <p>
                      {
                        reviews[(currentReviewIndex + 1) % reviews.length]
                          .location
                      }
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSlider;
