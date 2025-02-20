import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [restaurants, setRestaurants] = useState(null);

  const getRestaurant = async () => {
    try {
      const response = await axios.get(
        "https://partnermeatwala.com/api/Vendor/GetVendorInfo?restname=Shubh Restaurant&id=1"
      );

      const { success, vendorinfo } = response.data;

      if (success !== "1") {
        throw new Error("Failed to fetch data");
      }

      setRestaurants(vendorinfo);
    } catch (error) {
      console.error("Error fetching restaurant info:", error.message || error);
    }
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <footer className="footer-wrapper footer-layout3">
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-3">
              <div className="widget footer-widget">
                <h3 className="widget_title text-white">Address</h3>
                <div className="th-widget-contact">
                  <div className="info-box">
                    <p className="info-box_text">{restaurants?.address}</p>
                  </div>
                  <div className="info-box">
                    <p className="info-box_text">
                      CALL:{" "}
                      <a href="tel:+16326543564" className="info-box_link">
                        {restaurants?.contact}
                      </a>{" "}
                    </p>
                  </div>
                  <p>
                    <Link to="/menu" className="th-btn btn-sm style4">
                      Order Now<i className="fas fa-chevrons-right ms-2"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="widget footer-widget">
                <div className="text-center">
                  <h3 className="widget_title text-white">Download Our App</h3>
                  <Link to="/app-download">
                    <img src="/assets/img/gplay.png" alt="Download on Google Play" />
                  </Link>
                  <Link to="/app-download">
                    <img src="/assets/img/appstore.png" alt="Download on the App Store" />
                  </Link>
                  <h6 className="text-white mt-3">All Credit card Accepted</h6>
                  <div className="payment-img mb-3">
                    <img
                      src="/assets/img/normal/payment_methods.png"
                      alt="Accepted payment methods"
                    />
                  </div>
                  <div className="th-social">
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title text-white">Opening Hours</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu listing-hour-day">
                    {restaurants?.vendorOpeningHours?.map((openingHour, index) => (
                      <li key={index}>
                        <span className="listing-hour-day">{openingHour?.day}</span>
                        <span className="listing-hour-time">
                          {openingHour?.opentime} - {openingHour?.closetime}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-2 align-items-center justify-content-center">
            <div className="col-md-10 text-center">
              <ul className="footerlinks">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">Service Disclaimer</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-12 text-center">
              <p className="copyright-text">
                Meat Shop <i className="fal fa-copyright"></i> 2025 All Rights Reserved. Powered By{" "}
                <a href="#">Meatwala</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
