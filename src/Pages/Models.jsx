import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";
import { Link } from "react-router-dom";

const cars = [
  { name: "Audi A1",            image: CarImg1, price: 3700,  brand: "Audi",     seats: "5", transmission: "Manual",    fuel: "Diesel", topSpeed: "220 km/h", fuelCapacity: "45L" },
  { name: "Golf 6",             image: CarImg2, price: 3000,  brand: "VW",       seats: "5", transmission: "Manual",    fuel: "Diesel", topSpeed: "200 km/h", fuelCapacity: "50L" },
  { name: "Toyota Camry",       image: CarImg3, price: 2400,  brand: "Toyota",   seats: "5", transmission: "Automatic", fuel: "Petrol", topSpeed: "210 km/h", fuelCapacity: "55L" },
  { name: "BMW 320",            image: CarImg4, price: 2900,  brand: "BMW",      seats: "5", transmission: "Automatic", fuel: "Diesel", topSpeed: "230 km/h", fuelCapacity: "60L" },
  { name: "Mercedes Benz GLK",  image: CarImg5, price: 4100,  brand: "Mercedes", seats: "5", transmission: "Automatic", fuel: "Diesel", topSpeed: "240 km/h", fuelCapacity: "65L" },
  { name: "VW Passat",          image: CarImg6, price: 2000,  brand: "VW",       seats: "5", transmission: "Manual",    fuel: "Diesel", topSpeed: "190 km/h", fuelCapacity: "50L" },
];

function Models() {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [visibleCars, setVisibleCars] = useState([0, 1, 2]);

  useEffect(() => {
    const iv = setInterval(() => {
      const next = (currentCarIndex + 1) % cars.length;
      setCurrentCarIndex(next);
      setVisibleCars([next, (next+1)%cars.length, (next+2)%cars.length]);
    }, 5000);
    return () => clearInterval(iv);
  }, [currentCarIndex]);

  const handleCarChange = (dir) => {
    let next = dir === "next" ? currentCarIndex + 1 : currentCarIndex - 1;
    if (next < 0) next = cars.length - 1;
    if (next >= cars.length) next = 0;
    setCurrentCarIndex(next);
    setVisibleCars([next, (next+1)%cars.length, (next+2)%cars.length]);
  };

  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            {visibleCars.map((index) => {
              const car = cars[index];
              return (
                <div className="models-div__box" key={index}>
                  <div className="models-div__box__img">
                    <img src={car.image} alt={car.name} />
                  </div>
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>{car.name}</p>
                        <span>
                          {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                        </span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>₹{car.price}</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="car-details">
                      <span><i className="fa-solid fa-car-side"></i> {car.brand}</span>
                      <span className="right-aligned">{car.seats} Seats</span>
                      <span><i className="fa-solid fa-cogs"></i> {car.transmission}</span>
                      <span className="right-aligned"><i className="fa-solid fa-gas-pump"></i> {car.fuel}</span>
                      <span><i className="fa-solid fa-tachometer-alt"></i> {car.topSpeed}</span>
                      <span className="right-aligned"><i className="fa-solid fa-gas-pump"></i> {car.fuelCapacity}</span>
                    </div>
                    <div className="models-div__box__descr__name-price__btn">
                      <Link onClick={() => window.scrollTo(0,0)} to="/">Book Ride</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="carousel-controls">
            <button onClick={() => handleCarChange("prev")}><i className="fa-solid fa-arrow-left"></i> &nbsp;Previous</button>
            <button onClick={() => handleCarChange("next")}>Next&nbsp; <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span><i className="fa-solid fa-phone"></i><h3>+91 98765-43210</h3></span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
