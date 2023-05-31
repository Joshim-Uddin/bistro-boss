import React, { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="jar my-16">
      <SectionHeader heading="Testimonials" subHeading="What Our Client Say" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="px-28 flex flex-col gap-5">
              <Rating
                value={review.rating}
                style={{ maxWidth: 250 }}
                readOnly
                className="mx-auto"
              ></Rating>
              <FaQuoteLeft className="text-5xl mx-auto" />
              <p className="text-center">{review.details}</p>
              <h3 className="text-3xl font-semibold text-center">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
