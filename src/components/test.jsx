import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';

const Testimonials = () => {
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
            {reviews.map((review, index) => (
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
                key={index}
              >
                <SwiperSlide>
                  <div className="th-product product-grid text-left">
                    <div className="d-flex">
                      <div className="me-2">
                        <img
                          src="assets/img/testimonial/testi_3_1.jpg"
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
                      {/* Star Rating */}
                      <p className="mb-0">
                        <i
                          className="fa fa-star-o"
                          style={{ color: "orange" }}
                        ></i>
                        <i
                          className="fa fa-star-o"
                          style={{ color: "orange" }}
                        ></i>
                        <i
                          className="fa fa-star-o"
                          style={{ color: "orange" }}
                        ></i>
                        <i
                          className="fa fa-star-o"
                          style={{ color: "orange" }}
                        ></i>
                        <i
                          className="fa fa-star-o"
                          style={{ color: "orange" }}
                        ></i>
                      </p>
                      <p>{review.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            ))}

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


