import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";
import Person5 from "../images/team/5.png";
import Person6 from "../images/team/6.png";
import "../dist/Team_style.css";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Luke Miller", job: "Salesman" },
    { img: Person2, name: "Michael Diaz", job: "Business Owner" },
    { img: Person3, name: "Briana Ross", job: "Photographer" },
    { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
    { img: Person5, name: "Martin Rizz", job: "Mechanic" },
    { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div class="team-cards">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src={Person1} alt="Luke Miller"></img>
              </div>
              <div class="card-back">
                <h3>Luke Miller</h3>
                <p>Role: Salesman</p>
                <p>
                  Work: Handling client relations and closing sales effectively.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src={Person2} alt="Michael Diaz"></img>
              </div>
              <div class="card-back">
                <h3>Michael Diaz</h3>
                <p>Role: Business Owner</p>
                <p>Work: Strategizing and overseeing business operations.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src={Person3} alt="Briana Ross"></img>
              </div>
              <div class="card-back">
                <h3>Briana Ross</h3>
                <p>Role: Photographer</p>
                <p>Work: Capturing and editing professional photographs.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src={Person4} alt="Lauren Rivera"></img>
              </div>
              <div class="card-back">
                <h3>Lauren Rivera</h3>
                <p>Role: Car Detailist</p>
                <p>
                  Work: Ensuring every car is meticulously cleaned and polished.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src={Person5} alt="Martin Rizz"></img>
              </div>
              <div class="card-back">
                <h3>Martin Rizz</h3>
                <p>Role: Mechanic</p>
                <p>Work: Repairing and maintaining vehicle performance.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <img src={Person6} alt="Caitlyn Hunt"></img>
              </div>
              <div class="card-back">
                <h3>Caitlyn Hunt</h3>
                <p>Role: Manager</p>
                <p>
                  Work: Leading teams and optimizing workflows for efficiency.
                </p>
              </div>
            </div>
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

export default Team;
