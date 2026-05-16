import { Helmet } from "react-helmet";

function Footer() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Helmet>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <span className="logo_name">ZoomCarz</span>
            </div>
            <div className="media-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li><a href="/about">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press Releases</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li><a href="#">FAQs</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="#">Support Center</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">Rent a Car</li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="/models">Vehicle Types</a></li>
              <li><a href="#">Special Offers</a></li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">Newsletter</li>
              <li><input type="text" placeholder="Enter your email" /></li>
              <li><input type="button" value="Subscribe" /></li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">Copyright © 2024 <a href="#">ZoomCarz</a>. All rights reserved.</span>
            <span className="policy_terms">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
