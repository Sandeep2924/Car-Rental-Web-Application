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
import "../dist/Model_style.css";

function Models() {
  const cars = [
    {
      name: "Audi A1",
      image: CarImg1,
      price: 3700,
      brand: "Audi",
      seats: "4/5",
      transmission: "Manual",
      fuel: "Diesel",
      topSpeed: "220 km/h",
      fuelCapacity: "45L",
    },
    {
      name: "Golf 6",
      image: CarImg2,
      price: 3000,
      brand: "VW",
      seats: "4/5",
      transmission: "Manual",
      fuel: "Diesel",
      topSpeed: "200 km/h",
      fuelCapacity: "50L",
    },
    {
      name: "Toyota Camry",
      image: CarImg3,
      price: 2400,
      brand: "Toyota",
      seats: "4/5",
      transmission: "Automatic",
      fuel: "Petrol",
      topSpeed: "210 km/h",
      fuelCapacity: "55L",
    },
    {
      name: "BMW 320",
      image: CarImg4,
      price: 2900,
      brand: "BMW",
      seats: "4/5",
      transmission: "Automatic",
      fuel: "Diesel",
      topSpeed: "230 km/h",
      fuelCapacity: "60L",
    },
    {
      name: "Mercedes Benz GLK",
      image: CarImg5,
      price: 4100,
      brand: "Mercedes",
      seats: "4/5",
      transmission: "Automatic",
      fuel: "Diesel",
      topSpeed: "240 km/h",
      fuelCapacity: "65L",
    },
    {
      name: "VW Passat",
      image: CarImg6,
      price: 2000,
      brand: "VW",
      seats: "4/5",
      transmission: "Manual",
      fuel: "Diesel",
      topSpeed: "190 km/h",
      fuelCapacity: "50L",
    },
  ];

  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [visibleCars, setVisibleCars] = useState([0, 1, 2]);

  // Auto-change the car every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentCarIndex + 1) % cars.length;
      setCurrentCarIndex(nextIndex);
      setVisibleCars([
        nextIndex,
        (nextIndex + 1) % cars.length,
        (nextIndex + 2) % cars.length,
      ]);
    }, 5000); // Change car every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [currentCarIndex, cars.length]);

  const handleCarChange = (direction) => {
    let nextIndex =
      direction === "next" ? currentCarIndex + 1 : currentCarIndex - 1;
    if (nextIndex < 0) nextIndex = cars.length - 1;
    if (nextIndex >= cars.length) nextIndex = 0;
    setCurrentCarIndex(nextIndex);
    setVisibleCars([
      nextIndex,
      (nextIndex + 1) % cars.length,
      (nextIndex + 2) % cars.length,
    ]);
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
                    <div className="models-div__box__descr">
                      <div className="models-div__box__descr__name-price">
                        <div className="models-div__box__descr__name-price__name">
                          <p>{car.name}</p>
                          <span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                        </div>
                        <div className="models-div__box__descr__name-price__price">
                          <h4>₹{car.price}</h4>
                          <p>per day</p>
                        </div>
                      </div>
                      <div className="car-details">
                        <span>
                          <i className="fa-solid fa-car-side"></i> &nbsp;{" "}
                          {car.brand}
                        </span>
                        <span className="right-aligned">
                          {car.seats} &nbsp;{" "}
                          <i className="fa-solid fa-car-side"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-cogs"></i> &nbsp;{" "}
                          {car.transmission}
                        </span>
                        <span className="right-aligned">
                          <i className="fa-solid fa-gas-pump"></i> {car.fuel}{" "}
                          &nbsp;
                        </span>
                        <span>
                          <i className="fa-solid fa-tachometer-alt"></i> Top
                          Speed: {car.topSpeed}
                        </span>
                        <span className="right-aligned">
                          <i className="fa-solid fa-gas-pump"></i> Fuel
                          Capacity: {car.fuelCapacity} &nbsp;
                        </span>
                      </div>
                      <div className="models-div__box__descr__name-price__btn">
                        <Link onClick={() => window.scrollTo(0, 0)} to="/">
                          Book Ride
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="carousel-controls">
            <button onClick={() => handleCarChange("prev")}>Previous</button>
            <button onClick={() => handleCarChange("next")}>Next</button>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>+91 98765-43210</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
