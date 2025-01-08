import React, { useState, useEffect } from "react";
import axios from "axios";

const test() => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch reviews
  const getReviews = async () => {
    try {
      const res = await axios.get(
        `https://partnermeatwala.com/api/Vendor/getgooglereviews?restid=1`
      );
      setReviews(res?.data?.result?.reviews || []);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  // Handle next and previous
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Truncate text utility
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "…"
      : text;
  };

  return (
    <div className="testimonials-container">
      <div className="title-area text-center">
        <h2 className="sec-title">
          Our <br /> Reviews
        </h2>
      </div>
      <div className="slider">
        {reviews.length > 0 && (
          <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {reviews.map((review, index) => (
              <div className="slide" key={index}>
                <div className="review-card">
                  <div className="review-header">
                    <img
                      src={review.profile_photo_url || "default-profile.jpg"}
                      alt={review.author_name}
                      className="review-image"
                    />
                    <div>
                      <h6>{review.author_name}</h6>
                      <p>{review.relative_time_description}</p>
                    </div>
                  </div>
                  <div className="review-body">
                    <div className="stars">
                      {Array.from({ length: 5 }, (_, i) => (
                        <i
                          key={i}
                          className={`fa ${
                            i < review.rating ? "fa-star" : "fa-star-o"
                          }`}
                          style={{ color: "orange" }}
                        />
                      ))}
                    </div>
                    <p>{truncateText(review.text || "", 20)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <button className="slider-arrow slider-prev" onClick={handlePrev}>
          &#9664;
        </button>
        <button className="slider-arrow slider-next" onClick={handleNext}>
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default test
