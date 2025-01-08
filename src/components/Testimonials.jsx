import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = ({ restaurants }) => {
  const sliderRef = useRef(null);
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    try {
      const res = await axios.get(
        `https://partnermeatwala.com/api/Vendor/getgooglereviews?restid=1`
      );
      console.log("Reviews: ", res?.data?.result?.reviews);
      setReviews(res?.data?.result?.reviews);
    } catch (error) {}
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "…";
    }
    return text;
  };

  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    const sliderElement = sliderRef.current;

    if (sliderElement) {
      const sliderOptions = sliderElement.getAttribute("data-slider-options");

      try {
        const options = JSON.parse(sliderOptions);

        new Swiper(sliderElement, {
          ...options,
          loop: true,
          autoplay: {
            delay: 5000,
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
    <>
      <section>
        <div className="container">
          <div className="title-area text-center">
            <h2 className="sec-title">
              Our <br /> Reviews
            </h2>
          </div>
        </div>
      </section>

      <section className="" id="testi-sec">
        <div className="container">
          <div className="slider-area">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
              }}
              navigation={{
                prevEl: ".slider-prev",
                nextEl: ".slider-next",
              }}
              className="productSlider1"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="th-product product-grid text-left">
                    <div className="d-flex">
                      <div className="me-2">
                        <img
                          src={review.profile_photo_url}
                          alt="Product Image"
                          className="teimg"
                        />
                      </div>
                      <div className="product-content">
                        <h6 className="mb-0">
                          <a href="#">{review.author_name}</a>
                        </h6>
                        <p>{review.relative_time_description}</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="mb-0">
                        {[...Array(5)].map((_, index) => (
                          <i
                            key={index}
                            className={`fa ${
                              index < review.rating ? "fa-star" : ""
                            }`}
                            style={{ color: "orange" }}
                          ></i>
                        ))}
                      </p>
                      <p>{truncateText(review.text, 30)}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <button className="slider-arrow slider-prev">
              <i className="far fa-arrow-left"></i>
            </button>
            <button className="slider-arrow slider-next">
              <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
