import React from "react";
import Navbar from "../components/Navbar";
import ContactData from "../components/ContactData";
import { Link } from "react-router-dom";

const Contactus = ({ restaurants }) => {
  // Construct Google Maps URL using latitude and longitude
  const googleMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d${
    restaurants?.lng
  }!3d${
    restaurants?.lat
  }!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2z!5e0!3m2!1sen!2sin!4v${Date.now()}`;

  return (
    <>
      <div
        className="breadcumb-wrapper"
        data-bg-src="assets/img/hero/hero_bg_3_2.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h2 className="breadcumb-title text-white">Contact Us</h2>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="contact-feature">
                <div className="box-icon">
                  <i className="fa-light fa-location-dot" />
                </div>
                <div className="media-body">
                  <h3 className="box-title">Our Address</h3>
                  <p className="box-text">{restaurants?.address}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="contact-feature">
                <div className="box-icon bg-theme2">
                  <i className="fa-light fa-phone" />
                </div>
                <div className="media-body">
                  <h3 className="box-title">Phone Number</h3>
                  <p className="box-text">
                    <a href="tel:+16326543654">{restaurants?.contact}</a>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="contact-feature">
                <div className="box-icon bg-title">
                  <i className="fa-light fa-envelope" />
                </div>
                <div className="media-body">
                  <h3 className="box-title">Email Address</h3>
                  <p className="box-text">
                    <a
                      className="box-text w-75"
                      href={`mailto:${restaurants?.email}`}
                    >{restaurants?.email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <ContactData />
      </div>
      <section className="map_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="map_inner">
                <h4>Find Us on Google Map</h4>
                <p>
                  Explore the location of {restaurants?.name} on the map below.
                </p>
                <div className="map_bind">
                  <iframe
                    src={googleMapSrc}
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
