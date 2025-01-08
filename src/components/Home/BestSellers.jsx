import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper"; // Import Swiper
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles

const BestSellers = () => {
  const sliderRef = useRef(null);

  // Product data (hardcoded for demonstration)
  const products = [
    {
      image: "assets/img/01.jpg",
      price: "£177.85",
      title: "Chicken Breast",
      link: "#",
    },
    {
      image: "assets/img/02.jpg",
      price: "£177.85",
      title: "Beef Chops",
      link: "#",
    },
    {
      image: "assets/img/03.jpg",
      price: "£177.85",
      title: "Mutton",
      link: "#",
    },
    {
      image: "assets/img/04.jpg",
      price: "£177.85",
      title: "Mutton Kabab",
      link: "#",
    },
    {
      image: "assets/img/01.jpg",
      price: "£177.85",
      title: "Chicken Kabab",
      link: "#",
    },
    {
      image: "assets/img/03.jpg",
      price: "£177.85",
      title: "Mutton Stew",
      link: "#",
    },
  ];

  useEffect(() => {
    const sliderElement = sliderRef.current;

    if (sliderElement) {
      const sliderOptions = sliderElement.getAttribute("data-slider-options");

      try {
        const options = JSON.parse(sliderOptions);

        // Initialize Swiper with autoplay
        new Swiper(sliderElement, {
          ...options,
          loop: true,
          autoplay: {
            delay: 5000, // 5 seconds
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
          },
        });
      } catch (error) {
        console.error("Error parsing slider options:", error);
      }
    }
  }, []);

  return (
    <section className="space">
      <div className="container">
        <div className="title-area text-center">
          <h2 className="sec-title">Best Sellers</h2>
        </div>
        <div className="slider-area">
          <div
            ref={sliderRef}
            className="swiper th-slider has-shadow productSlider1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":2},"768":{"slidesPerView":2},"992":{"slidesPerView":3},"1200":{"slidesPerView":3}}}'
          >
            <div className="swiper-wrapper">
              {products.map((product, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="th-product product-grid">
                    <div className="product-img">
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: "100%", height: "280px" }}
                      />
                    </div>
                    <div className="product-content">
                      <span className="price">{product.price}</span>
                      <h3 className="product-title">
                        <a href={product.link}>{product.title}</a>
                      </h3>
                      <Link
                        to="/menu"
                        className="th-btn btn-sm style4"
                        style={{ color: "#fff" }}
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="slider-arrow slider-prev"
            aria-label="Previous Slide"
          >
            <i className="far fa-arrow-left"></i>
          </button>
          <button
            className="slider-arrow slider-next"
            aria-label="Next Slide"
          >
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
