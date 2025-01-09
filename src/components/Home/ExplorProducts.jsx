import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ExplorProducts = () => {
  const [products, setProducts] = useState([]);

  const getCategory = async () => {
    try {
      const res = await axios.get(
        `https://partnermeatwala.com/api/Vendor/GetTopCategory`
      );
      console.log("Response", res.data);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <section className="space" id="blog-sec">
      <div className="container">
        <div className="title-area text-center">
          <h2 className="sec-title">
            Explore <br /> Our Products
          </h2>
        </div>
        <div className="row gy-4">
          {products.slice(0, 3).map((product, index) => (
            <div className="col-xl-4" key={index}>
              <div className="blog-grid">
                <div className="blog-img">
                  <img
                    src={
                      product.image
                        ? `https://partnermeatwala.com/documents/${product.image}`
                        : "assets/img/p1.jpg"
                    }
                    alt={product.name || "Product Image"}
                  />
                </div>
                <div className="blog-content text-center">
                  <h3 className="box-title">
                    <a href="#">{product.name}</a>
                  </h3>
                  <Link to="/menu" className="th-btn btn-sm style4">
                    Explore<i className="fas fa-chevron-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplorProducts;
