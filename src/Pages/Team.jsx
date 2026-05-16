import { useState } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";
import Person5 from "../images/team/5.png";
import Person6 from "../images/team/6.png";

const team = [
  { img: Person1, name: "Luke Miller",    role: "Salesman",        desc: "Handling client relations and closing sales effectively every day." },
  { img: Person2, name: "Michael Diaz",   role: "Business Owner",  desc: "Strategizing and overseeing business operations for growth." },
  { img: Person3, name: "Briana Ross",    role: "Photographer",    desc: "Capturing and editing stunning professional photographs." },
  { img: Person4, name: "Lauren Rivera",  role: "Car Detailist",   desc: "Ensuring every car is meticulously cleaned and polished." },
  { img: Person5, name: "Martin Rizz",    role: "Mechanic",        desc: "Repairing and maintaining vehicle performance at peak." },
  { img: Person6, name: "Caitlyn Hunt",   role: "Manager",         desc: "Leading teams and optimizing workflows for top efficiency." },
];

function Team() {
  // State to track which card is currently being hovered over
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", margin: "4rem 0 3rem" }}>
            <h4 style={{ color: "#ff4d30", fontSize: "1.2rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>
              Experts
            </h4>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1e1e1e" }}>
              Meet Our Leadership Team
            </h2>
          </div>

          {/* Flexible Professional Grid */}
          <div 
            style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "2.5rem", 
              justifyContent: "center",
              paddingBottom: "5rem" 
            }}
          >
            {team.map(({ img, name, role, desc }, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div 
                  key={name} 
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ 
                    background: "#fff", 
                    boxShadow: isHovered ? "0 20px 40px rgba(0, 0, 0, 0.12)" : "0 10px 30px rgba(0, 0, 0, 0.05)", 
                    borderRadius: "12px", 
                    overflow: "hidden",
                    width: "350px",
                    transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                    transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1)"
                  }}
                >
                  {/* Photo & Sliding Info Overlay Container */}
                  <div style={{ position: "relative", overflow: "hidden", background: "#f6f6f6", height: "340px" }}>
                    <img 
                      src={img} 
                      alt={name} 
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                    />
                    
                    {/* Sliding Overlay Container */}
                    <div 
                      style={{
                        position: "absolute",
                        top: isHovered ? "0" : "100%", 
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(255, 77, 48, 0.94)", /* Brand matching #ff4d30 theme */
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2rem",
                        textAlign: "center",
                        transition: "top 0.4s cubic-bezier(0.25, 1, 0.5, 1)"
                      }}
                    >
                      <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#fff", fontWeight: "500", margin: "0 0 1.5rem 0" }}>
                        {desc}
                      </p>
                      
                      {/* Social Connect Icons */}
                      <div style={{ display: "flex", gap: "1.2rem" }}>
                        <a href="#linkedin" aria-label="LinkedIn" style={{ color: "#fff", fontSize: "1.3rem" }}><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#twitter" aria-label="Twitter" style={{ color: "#fff", fontSize: "1.3rem" }}><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#email" aria-label="Email" style={{ color: "#fff", fontSize: "1.3rem" }}><i className="fa-solid fa-envelope"></i></a>
                      </div>
                    </div>
                  </div>

                  {/* Base Permanent Info Banner (Always Visible Below) */}
                  <div style={{ padding: "1.5rem", textAlign: "center", borderTop: "1px solid #f3f3f3" }}>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#1e1e1e", marginBottom: "0.2rem" }}>
                      {name}
                    </h3>
                    <p style={{ fontSize: "0.95rem", color: "#6c757d", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      {role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Connect Callout Section */}
        <div className="book-banner" style={{ position: "relative" }}>
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: "5", padding: "4rem 0" }}>
              <h2 style={{ fontSize: "2rem", color: "#fff", fontWeight: "700" }}>Book a car by getting in touch with us</h2>
              <span style={{ display: "flex", alignItems: "center", gap: "1rem", color: "#ff4d30" }}>
                <i className="fa-solid fa-phone" style={{ fontSize: "1.8rem" }}></i>
                <h3 style={{ fontSize: "1.8rem", color: "#fff", fontWeight: "700", margin: "0" }}>+91 98765-43210</h3>
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