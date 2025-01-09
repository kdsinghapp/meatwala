import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Menu Section/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";

const OrderOnline = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://partnermeatwala.com/api/Vendor/GetVandoreDetails?id=1`
      );
      setData(res.data.restaurantmenulist);
    } catch (error) {
      console.error("Error fetching restaurant info:", error.message || error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("Restaurants", data);

  return (
    <>
      <div
        className="breadcumb-wrapper"
        data-bg-src="assets/img/hero/hero_bg_3_2.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h2 className="breadcumb-title text-white">Menu</h2>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>Menu</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div id="column-left">
              <div className="box">
                <div className="box-content" style={{ position: "relative" }}>
                  <button
                    className="lefty paddle"
                    id="left-button"
                    onclick="scrollcatLeft()"
                  >
                    <i className="fa fa-angle-left" aria-hidden="true" />
                  </button>
                  <div className="box-category" id="scrollit">
                    <div className="cater" id="caterr">
                      <ul id="left-side-bar-category">
                        {data?.map((item, index) => (
                          <li className="" key={index}>
                            {" "}
                            <a href="#" className="active">
                              {item.category}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button
                    className="righty paddle"
                    id="right-button"
                    onclick="scrollcatRight()"
                  >
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-12 mb-5">
              {data?.map((category, index) => (
                <div
                  className="row mt-0 gy-40 menuu"
                  id={`cat_${index}`}
                  key={index}
                >
                  <div className="col-xl-12 col-lg-12 col-12 text-center">
                    <h4 style={{ fontWeight: "bold" }}>{category.category}</h4>
                  </div>
                  {category.items.map((item, idx) => (
                    <div className="col-xl-3 col-lg-3 col-6" key={idx}>
                      <div className="th-product product-grid">
                        <div className="product-img">
                          <img
                            src={`https://partnermeatwala.com/documents/${item.image}`}
                            alt={item.foodname}
                          />
                          <span className="product-tag">Hot</span>
                          {/* {item.isHot && (
                          )} */}
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">{item.foodname}</h3>
                          <span className="price mb-2">${item.cost}</span>
                          <a
                            href="#"
                            className="th-btn btn-sm style4"
                            style={{ color: "#fff" }}
                          >
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ScrollTop/>
    </>
  );
};

export default OrderOnline;
