import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <section className="download-section">
      <div className="container">
        <div className="download-text">
          <h2>Download Our App for Exclusive Deals</h2>
          <p>Get access to members-only offers, seamless booking, real-time tracking, and 24/7 support right from your phone. Available on iOS and Android.</p>
          <div className="download-text__btns">
            <img alt="Google Play Store" src={Img2} />
            <img alt="Apple App Store" src={Img1} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
