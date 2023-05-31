import React from "react";
import SectionHeader from "../../../components/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Slider = () => {
  return (
    <div className="mt-16 mb-20 jar">
      <SectionHeader
        heading={"order online"}
        subHeading={"From 11:00am to 10:00pm"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-2xl text-white uppercase text-center -mt-12 mb-3 drop-shadow-xl">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-2xl text-white uppercase text-center -mt-12 mb-3 drop-shadow-xl">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-2xl text-white uppercase text-center -mt-12 mb-3 drop-shadow-xl">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-2xl text-white uppercase text-center -mt-12 mb-3 drop-shadow-xl">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-2xl text-white uppercase text-center -mt-12 mb-3 drop-shadow-xl">
            Sandwitch
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
