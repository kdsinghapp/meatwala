import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="th-header header-layout3">
        <div className="menu-top">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <a href="/">
                    <img
                      style={{ width: "180px" }}
                      src="https://api.asm.skype.com/v1/objects/0-weu-d16-792f3ec7fb37932e7970a6a5ab594602/views/imgpsh_fullsize_anim"
                      alt=""
                    />
                    {/* <h2>LOGO</h2> */}
                  </a>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-icons">
                  <div className="header-top">
                    <div className="container">
                      <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
                        <div className="col-auto d-none d-lg-block">
                          <div className="header-links">
                            <ul>
                              <li>
                                <div className="social-links">
                                  <a href="https://www.facebook.com/">
                                    <i className="fab fa-facebook-f"></i>
                                  </a>{" "}
                                  <a href="https://www.instagram.com/">
                                    <i className="fab fa-instagram"></i>
                                  </a>{" "}
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-12 text-center">
                  <nav className="main-menu menu-style1 d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/menu">Order Online</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-lg-none"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
