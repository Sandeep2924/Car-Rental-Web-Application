import { useState } from "react";
import "../dist/CarBox.css";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);

  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="car-box-container">
          <div className="car-image-container">
            {carLoad && <span className="loader"></span>}
            <img style={{ display: carLoad ? "none" : "block" }} src={car.img} alt={car.name} onLoad={() => setCarLoad(false)} />
          </div>
          <div className="car-description-container">
            <div className="car-price"><span>₹{car.price}</span> / per day</div>
            <div className="car-details">
              <div className="car-detail"><span>Model</span><span>{car.model}</span></div>
              <div className="car-detail"><span>Brand</span><span>{car.mark}</span></div>
              <div className="car-detail"><span>Year</span><span>{car.year}</span></div>
              <div className="car-detail"><span>Doors</span><span>{car.doors}</span></div>
              <div className="car-detail"><span>A/C</span><span>{car.air}</span></div>
              <div className="car-detail"><span>Transmission</span><span>{car.transmission}</span></div>
              <div className="car-detail"><span>Fuel Type</span><span>{car.fuel}</span></div>
            </div>
            <a className="reserve-button" href="#booking-section">Reserve Now &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
