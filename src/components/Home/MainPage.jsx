import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import 'swiper/css';


const MainPage = () => {
  const slides = [
    {
      bgImage: "assets/img/hero/hero_bg_3_1.jpg",
      subtitle: "100% Fresh & Healthy Meat Provide",
      title: "Fresh Mutton & Chicken",
      description:
        "Mutton are typically certified by regulatory bodies to ensure they meet specific organic standards.",
    },
    {
      bgImage: "assets/img/hero/hero_bg_3_2.jpg",
      subtitle: "100% Fresh & Healthy Meat Provide",
      title: "Fresh Mutton & Chicken",
      description:
        "Mutton are typically certified by regulatory bodies to ensure they meet specific organic standards.",
    },
    {
      bgImage: "assets/img/hero/hero_bg_3_3.jpg",
      subtitle: "100% Fresh & Healthy Meat Provide",
      title: "Fresh Mutton & Chicken",
      description:
        "Mutton are typically certified by regulatory bodies to ensure they meet specific organic standards.",
    },
  ];

  return (
    <div className="th-hero-wrapper hero-3" id="hero">
      <div>
        <div className="row justify-content-end">
          <div className="col-xl-12">
            <Swiper
              effect="fade"
              pagination={{
                el: ".slider-pagination",
                clickable: true,
              }}
              className="th-slider"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="hero-inner"
                    style={{ backgroundImage: `url(${slide.bgImage})` }}
                  >
                    <div className="hero-style3">
                      <span
                        className="hero-subtitle"
                        data-ani="slideinup"
                        data-ani-delay="0.0s"
                      >
                        {slide.subtitle}
                      </span>
                      <h1 className="hero-title2 text-white">
                        <span
                          className="title1"
                          data-ani="slideinup"
                          data-ani-delay="0.2s"
                        >
                          {slide.title}
                        </span>
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.5s"
                      >
                        {slide.description}
                      </p>
                      <a
                        href="/menu"
                        className="th-btn style4"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        ORDER NOW
                        <i className="fas fa-chevrons-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Pagination Controls */}
            <div className="slider-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
