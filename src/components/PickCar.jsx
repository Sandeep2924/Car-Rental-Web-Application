import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

const CAR_BUTTONS = [
  { id: "btn1", active: "SecondCar",  label: "Hyundai Grand i10"    },
  { id: "btn2", active: "FirstCar",   label: "Mahindra XUV700"      },
  { id: "btn3", active: "ThirdCar",   label: "Hyundai Verna"        },
  { id: "btn4", active: "FourthCar",  label: "Maruti Suzuki Swift"  },
  { id: "btn5", active: "FifthCar",   label: "Toyota Fortuner"      },
  { id: "btn6", active: "SixthCar",   label: "BMW M5"               },
];

const CAR_MAP = { FirstCar: 0, SecondCar: 1, ThirdCar: 2, FourthCar: 3, FifthCar: 4, SixthCar: 5 };

function PickCar() {
  const [active, setActive]     = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  return (
    <section className="pick-section">
      <div className="container">
        <div className="pick-container">
          <div className="pick-container__title">
            <h3>Vehicle Models</h3>
            <h2>Our Rental Fleet</h2>
            <p>Choose from a variety of premium vehicles for your next adventure or business trip.</p>
          </div>
          <div className="pick-container__car-content">
            <div className="pick-box">
              {CAR_BUTTONS.map(({ id, active: act, label }) => (
                <button key={id} className={colorBtn === id ? "colored-button" : ""}
                  onClick={() => { setActive(act); setColorBtn(id); }}>
                  {label}
                </button>
              ))}
            </div>
            <CarBox data={CAR_DATA} carID={CAR_MAP[active]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PickCar;
