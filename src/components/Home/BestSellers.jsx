import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper"; // Import Swiper
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles

const BestSellers = () => {
  const sliderRef = useRef(null);

  const [products, setProducts] = useState([]);

  const getBestSellers = async () => {
    try {
      const res = await axios.get(
        `https://partnermeatwala.com/api/Vendor/getbestsellercategory?restid=1`
      );
      console.log("Response", res?.data?.items);
      setProducts(res?.data?.items);
    } catch (error) {}
  };

  useEffect(() => {
    getBestSellers();
  }, []);

  // const

  // Product data (hardcoded for demonstration)

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
                        src={
                          product.rest_catimage
                            ? `https://partnermeatwala.com/documents/${product.rest_catimage}`
                            : product.ad_catimage
                            ? `https://partnermeatwala.com/documents/${product.ad_catimage}`
                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAALVBMVEXz9Pa5vsq2u8j29/jN0dno6u7V2N++ws3w8fTf4efi5OnFydPY2+HJztbR1txPmUB/AAAC0klEQVR4nO3b55aqMBiFYUoioXn/l3ukKSVBJGH4ctb7/JxRVrYbCDVJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArPLQ7g60YnSjwmoqc3eouarOwmsrOT026TXKu4NNyosCioloissSFndn6+VlNgwn6EY4LrKUsCnm7TCaNuiudFqoiIT9Spo9Ak+Hj77GWsKUMSasAi+2lJMwIeE5JPxLtoRGa8+xiU5YqX5urBuf4UlO+Eyn+br2OHaWm9DU2eeoK2tOL1Vuwucs4Is+u1SxCctlwLQ4O0SpCfN6fXpw9thZakK9qjDN1MmlSk24Xkm/jdG9sxWaMG82CXc3ROXe2UpN+PgpYbffbRwtCk3421qqug+7WpSa0Pywp5lmTnuLUhNaZgvHt4yafgx7i1ITbq4sOoeoZm3bWhSbcDHyF8d0YNRiVba0KDdhMj/yTl2Twep3sLQoOOGrnmn4hePEf9mg/acQnDDJK1V013Trh3HMdesGbS1KTpj0FzG0cQ3O0qClReEJd9ka3LYYb0LzdARcRYw3oavB9YoabUJ3g6sWY0241+CyxUgSmtWFqP0GFy3GkVCnhZ7vPdqvAT8txpAw10WazYf4vcFZizEk1P3fPy0eabD7xnC+JT9h12D/j3o8djvWYH83ufu4/IT6PeKhxYMNdqdSUSScGny3eLTBaBLqxaAL/W0ejC3hvMEh4uF8kSTU+xmiT7hp8L9L6NVgBAk9G4wgoWeD4hN6Nyg+oXeD0hPmxw9dYk24vX9IQhLem21AQhKS8H6hE8q+TtPdVvM1hJKaMBwS/iUSnpILSji+FaTCvgk83oer707XmR70uuTdNSXh3bX384hXvH8Yeus+x2ye1gtGxjukSVJdllBGhUn3QKL/wdpWJmQd7em2CLoV9ltiq0XsZia6fITVCCoQAAAAAAAAAAAAAAAAAAAAAAAAAAAAuMU/B0kslFd7c1EAAAAASUVORK5CYII="
                        }
                        alt={product.title}
                        style={{ width: "100%", height: "280px" }}
                      />
                    </div>
                    <div className="product-content">
                      <span className="price">{product.price}</span>
                      <h3 className="product-title">
                        <a href={product.link}>{product.catname}</a>
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
          <button className="slider-arrow slider-next" aria-label="Next Slide">
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
