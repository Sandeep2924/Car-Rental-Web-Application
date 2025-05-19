import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Download Our App for Exclusive Features</h2>
            <p>
              Unlock a world of benefits by downloading our app! Get access to
              exclusive features, special offers, and seamless user experiences
              that help you get the most out of our services. Start enjoying
              convenience and top-notch services right at your fingertips.
            </p>
            <div className="download-text__btns">
              <img alt="Google Play Store" src={Img2} />
              <img alt="Apple App Store" src={Img1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
