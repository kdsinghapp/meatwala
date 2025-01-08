import React from "react";

const MobilePage = () => {
  return (
    <section className="space">
      <div className="container z-index-common">
        <div
          className="cta-box mega-hover row"
          style={{ background: "#ffdaad" }}
        >
          <div className="box-content col-lg-6">
            <span className="box-subtitle">DOWNLOAD THE APP AND</span>
            <h3 className="box-title">
              Get Up to{" "}
              <b>
                <span className="text-theme">30%</span> Off
                <br />
                On First Order
              </b>
            </h3>
            <center></center>
            <a href="#">
              <img src="/assets/img/gplay.png" alt="Google Play" />
            </a>{" "}
            <br /> <br />
            <a href="#">
              <img src="/assets/img/appstore.png" alt="App Store" />
            </a>
          </div>
          <div className="col-lg-6">
            <img src="/assets/img/mobile_banner_image.png" alt="Mobile Banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePage;
