import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css";
import axios from "axios";

const MainPage = () => {
  const [slides, setSlides] = useState([]);

  const pkid = "1";

  const getSliderData = async () => {
    try {
      const res = await axios.post(
        `https://partnermeatwala.com/api/Vendor/GetSlider`,
        { pkid }
      );
      console.log("Response", res?.data?.sliders);
      setSlides(res.data.sliders);
    } catch (error) {
      console.error("Error fetching slider data:", error);
    }
  };

  useEffect(() => {
    getSliderData();
  }, []);

  // Function to decode HTML entities
  const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

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
                    style={{
                      backgroundImage: `url("https://partnermeatwala.com/documents/${slide.image}")`,
                    }}
                  >
                    <div className="hero-style3">
                      <span
                        className="hero-subtitle"
                        data-ani="slideinup"
                        data-ani-delay="0.0s"
                      >
                        {decodeHtml(slide.heading)}
                      </span>
                      <h1 className="hero-title2 text-white">
                        <span
                          className="title1"
                          data-ani="slideinup"
                          data-ani-delay="0.2s"
                        >
                          {decodeHtml(slide.heading)}
                        </span>
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.5s"
                      >
                        {decodeHtml(slide.description)}
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
