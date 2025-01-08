import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const Aboutus = ({ restaurants }) => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        data-bg-src="assets/img/hero/hero_bg_3_2.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h2 className="breadcumb-title text-white">About Us</h2>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-hidden mb-5 mt-5" id="about-sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <img
                src="https://file.visittallinn.ee/8lvhrb/detail-meatwine.jpg"
                alt="About"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-xl-6">
              <div className="ps-xxl-5 ps-xl-2 ms-xl-1 text-center text-xl-start">
                <div className="title-area mb-32">
                  <h2 className="sec-title">Who We Are</h2>
                  <p className="sec-text" style={{ textAlign: "justify" }}>
                    At{" "}
                    <span style={{ color: "black" }}>
                      {restaurants?.name}
                    </span>
                    , we bring you the finest non-veg delicacies crafted with
                    love, fresh ingredients, and bold flavors. From sizzling
                    grills to aromatic curries, our menu celebrates the art of
                    unforgettable taste. Step in for a cozy dining experience
                    where every bite is a feast for your senses!
                  </p>
                  <p className="sec-text" style={{ textAlign: "justify" }}>
                    Whether you’re a fan of classic grilled dishes, aromatic
                    curries, or contemporary non-veg fusions, we have something
                    to tantalize your taste buds. Our mission is to provide not
                    just a meal but an unforgettable dining experience, where
                    great food meets warm hospitality in a cozy, welcoming
                    atmosphere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-sec11">
        <div className="container">
          <div className="counter-card-wrap">
            <div className="counter-card">
              <div className="box-icon">
                <img src="assets/img/icon/counter_card_1.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h2 className="box-number">
                  <CountUp end={10} duration={5} />+
                </h2>
                <p className="box-text">Our Total Items</p>
              </div>
            </div>
            <div className="divider" />
            <div className="counter-card">
              <div className="box-icon">
                <img src="assets/img/icon/counter_card_2.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h2 className="box-number">
                  <CountUp end={25} duration={4.5} />+
                </h2>
                <p className="box-text">Team Members</p>
              </div>
            </div>
            <div className="divider" />
            <div className="counter-card">
              <div className="box-icon">
                <img src="assets/img/icon/counter_card_3.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h2 className="box-number">
                  <CountUp end={100} duration={4} />+
                </h2>
                <p className="box-text">Customers</p>
              </div>
            </div>
            <div className="divider" />
            <div className="counter-card">
              <div className="box-icon">
                <img src="assets/img/icon/counter_card_4.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h2 className="box-number">
                  <CountUp end={5} duration={4} />+
                </h2>
                <p className="box-text">Awards Winning</p>
              </div>
            </div>
            <div className="divider" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
