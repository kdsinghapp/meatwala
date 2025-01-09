import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // Import required modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";

const Testimonials = ({ restaurants }) => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    try {
      const res = await axios.get(
        `https://partnermeatwala.com/api/Vendor/getgooglereviews?restid=1`
      );
      setReviews(res?.data?.result?.reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
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

      <section className="overflow-hidden bg-smoke2 space" id="testi-sec">
        <div className="container">
          <div className="slider-area">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true} // Enable looping
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]} // Include required modules
              navigation={{
                prevEl: ".slider-prev",
                nextEl: ".slider-next",
              }}
              breakpoints={{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
              }}
              className="productSlider1"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="th-product product-grid text-left">
                    <a href={review?.author_url} target="_blank">
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
                    </a>
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
