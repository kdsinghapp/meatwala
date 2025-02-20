import React, { useEffect, useState } from "react";
import MobilePage from "../components/MobilePage";
import Testimonials from "../components/Testimonials";
import MainPage from "../components/Home/MainPage";
import BestSellers from "../components/Home/BestSellers";
import axios from "axios";
import ScrollTop from "../components/ScrollTop";
import ExplorProducts from "../components/Home/ExplorProducts";

const Home = ({ restaurants }) => {
  const [welcome, setWelcome] = useState({});

  const pkid = "1";

  const getWelcomeHere = async () => {
    try {
      const res = await axios.post(
        `https://partnermeatwala.com/api/Vendor/GetVendorWelcomeMessage`,
        { pkid }
      );
      setWelcome(res?.data?.result);
    } catch (error) {}
  };

  useEffect(() => {
    getWelcomeHere();
  }, []);

  const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    const decodedText = txt.value;

    // Remove HTML tags
    const strippedText = decodedText.replace(/<\/?[^>]+(>|$)/g, "");
    return strippedText;
  };

  return (
    <section>
      {/* <div className="preloader">
      <button className="th-btn preloaderCls">Cancel Preloader</button>
      <div className="preloader-inner">
        <div className="loader">
          <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span>
        </div>
      </div>
    </div> */}
      <div className="popup-search-box d-none d-lg-block">
        <button className="searchClose">
          <i className="fal fa-times"></i>
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />{" "}
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div>
      <div className="th-menu-wrapper">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle">
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <a href="/">
              <h4>LOGO</h4>
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Order Online</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <MainPage />

      <section className="space bg-smoke2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-8">
              <div className="title-area text-center">
                <h2 className="sec-title text-white">
                  Welcome to <br /> {restaurants?.name}
                </h2>
              </div>
            </div>

            <div className="col-xl-12 text-center">
              <p className="text-white">{decodeHtml(welcome?.message)}</p>
            </div>
          </div>
        </div>
      </section>
      <BestSellers />
      <section className="bg-top-center overflow-hidden pb-5 pt-5 bg-lighter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-8">
              <div className="title-area text-center">
                <h2 className="sec-title">How It Works</h2>
              </div>
            </div>
          </div>
          <div className="deal-sec-area">
            <div className="row">
              <div className="col-lg-3 mb-3">
                <div
                  className="text-center pt-2 bg-smoke2"
                  style={{
                    border: "1px solid #e13e3e",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    height: "280px",
                    borderRadius: "20px",
                  }}
                >
                  <img src="assets/img/order.png" />
                  <br />
                  <br />
                  <h5 className="text-white">YOU ORDER</h5>
                  <p className="text-white">
                    Choose your favourite items Checkout
                  </p>
                </div>
              </div>
              <div className="col-lg-3 mb-3">
                <div
                  className="text-center pt-2 bg-smoke2"
                  style={{
                    border: "1px solid #e13e3e",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    height: "280px",
                    borderRadius: "20px",
                  }}
                >
                  <img src="assets/img/cut.png" />
                  <br />
                  <br />
                  <h5 className="text-white">WE CUT</h5>
                  <p className="text-white">
                    Our master butchers get to <br />
                    work and cut your selection <br />
                    fresh to your spec
                  </p>
                </div>
              </div>

              <div className="col-lg-3 mb-3">
                <div
                  className="text-center pt-2 bg-smoke2"
                  style={{
                    border: "1px solid #e13e3e",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    height: "280px",
                    borderRadius: "20px",
                  }}
                >
                  <img src="assets/img/ship.png" />
                  <br />
                  <br />
                  <h5 className="text-white">WE SHIP</h5>
                  <p className="text-white">
                    We express ship your order in <br /> specially designed
                    temperature
                    <br /> controlled eco-freindly packaging
                  </p>
                </div>
              </div>
              <div className="col-lg-3 mb-3">
                <div
                  className="text-center pt-2 bg-smoke2"
                  style={{
                    border: "1px solid #e13e3e",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    height: "280px",
                    borderRadius: "20px",
                  }}
                >
                  <img src="assets/img/enjoy.png" />
                  <br />
                  <br />
                  <h5 className="text-white">YOU ENJOY!</h5>
                  <p className="text-white">
                    Receive your items on your
                    <br /> doorstep, ready to that
                    <br /> specal dinner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExplorProducts />
      <Testimonials restaurants={restaurants} />
      <MobilePage />
      <ScrollTop />
      {/* 
    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="assets/js/app.min.js"></script>
    <script src="assets/js/main.js"></script> 
    */}
    </section>
  );
};

export default Home;
