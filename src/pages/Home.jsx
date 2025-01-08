import React from "react";
import Footer from "../components/Footer";
import MobilePage from "../components/MobilePage";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import MainPage from "../components/Home/MainPage";
import BestSellers from "../components/Home/BestSellers";
import { Link } from "react-router-dom";

const Home = ({ restaurants }) => {
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
              <p className="text-white">
                We are thrilled to have you with us and are committed to
                offering you an unforgettable dining experience. Our restaurant
                is more than just a place to eat—it’s a celebration of flavor,
                hospitality, and connection. With a menu crafted from the finest
                ingredients and a commitment to excellence, each dish is
                designed to satisfy your taste buds and create lasting memories.
                Whether you're here for a special occasion or just a casual
                meal, we invite you to relax and enjoy the atmosphere we’ve
                carefully created just for you.
              </p>
              <p className="text-white">
                Our dedicated team is here to ensure that your time with us is
                as enjoyable as possible. From the first bite to the last, we’re
                here to take care of every detail so you can focus on what
                matters most—savoring great food and good company. Thank you for
                choosing{" "}
                <span style={{ color: "black", fontWeight: "800" }}>
                  {restaurants?.name}
                </span>
                . We look forward to making your experience with us truly
                exceptional!
              </p>
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

      <section className="space" id="blog-sec">
        <div className="container">
          <div className="title-area text-center">
            <h2 className="sec-title">
              Explore <br /> Our Products
            </h2>
          </div>
          <div className="row gy-4">
            <div className="col-xl-4">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="assets/img/p1.jpg" alt="product1" />
                </div>
                <div className="blog-content text-center">
                  <h3 className="box-title">
                    <a href="#">Chicken</a>
                  </h3>
                  <Link to="/menu" className="th-btn btn-sm style4">
                    Explore<i className="fas fa-chevrons-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="assets/img/p2.jpg" alt="product2" />
                </div>
                <div className="blog-content text-center">
                  <h3 className="box-title">
                    <a href="#">Beef</a>
                  </h3>
                  <Link to="/menu" className="th-btn btn-sm style4">
                    Explore<i className="fas fa-chevrons-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="assets/img/p3.png" alt="product3" />
                </div>
                <div className="blog-content text-center">
                  <h3 className="box-title">
                    <a href="#">Lamb</a>
                  </h3>
                  <Link to="/menu" className="th-btn btn-sm style4">
                    Explore<i className="fas fa-chevrons-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials restaurants={restaurants} />
      <MobilePage />
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          ></path>
        </svg>
      </div>
      {/* 
    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="assets/js/app.min.js"></script>
    <script src="assets/js/main.js"></script> 
    */}
    </section>
  );
};

export default Home;
