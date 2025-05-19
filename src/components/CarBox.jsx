import { useState } from "react";
import "../dist/CarBox.css";
function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);

  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="car-box-container">
          {/* Car Image */}
          <div className="car-image-container">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car-img"
              onLoad={() => setCarLoad(false)}
            />
          </div>

          {/* Car Description */}
          <div className="car-description-container">
            <div className="car-price">
              <span>₹{car.price}</span>/ rent per day
            </div>

            <div className="car-details">
              <div className="car-detail">
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className="car-detail">
                <span>Mark</span>
                <span>{car.mark}</span>
              </div>

              <div className="car-detail">
                <span>Year</span>
                <span>{car.year}</span>
              </div>

              <div className="car-detail">
                <span>Doors</span>
                <span>{car.doors}</span>
              </div>

              <div className="car-detail">
                <span>AC</span>
                <span>{car.air}</span>
              </div>

              <div className="car-detail">
                <span>Transmission</span>
                <span>{car.transmission}</span>
              </div>

              <div className="car-detail">
                <span>Fuel</span>
                <span>{car.fuel}</span>
              </div>
            </div>

            {/* Reserve Button */}
            <a className="reserve-button" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
