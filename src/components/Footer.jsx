import { Helmet } from "react-helmet";

function Footer() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </Helmet>

      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <span className="logo_name">ZoomCarz</span>
            </div>

            <div className="media-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li><a href="/about">Our Story</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/press">Press Releases</a></li>
            </ul>

            <ul className="box">
              <li className="link_name">Services</li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/support">Support Center</a></li>
              <li><a href="/terms">Terms &amp; Conditions</a></li>
            </ul>

            <ul className="box">
              <li className="link_name">Rent a Car</li>
              <li><a href="/how-it-works">How It Works</a></li>
              <li><a href="/locations">Locations</a></li>
              <li><a href="/models">Vehicle Types</a></li>
              <li><a href="/offers">Special Offers</a></li>
            </ul>

            <ul className="box input-box">
              <li className="link_name">Newsletter</li>

              <li>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </li>

              <li>
                <input
                  type="button"
                  value="Subscribe"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2024{" "}
              <a href="/">ZoomCarz</a>. All rights reserved.
            </span>

            <span className="policy_terms">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms &amp; Conditions</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;