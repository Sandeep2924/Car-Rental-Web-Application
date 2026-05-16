import "./dist/styles.css";
import { useState } from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (email) => setUser(email);
  const handleLogout       = () => setUser(null);

  return (
    <>
      <Navbar
        user={user}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
      />
      <Routes>
        <Route index path="/"              element={<Home />}             />
        <Route path="about"                element={<About />}            />
        <Route path="models"               element={<Models />}           />
        <Route path="testimonials"         element={<TestimonialsPage />} />
        <Route path="team"                 element={<Team />}             />
        <Route path="contact"              element={<Contact />}          />
      </Routes>
    </>
  );
}

export default App;
