import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../images/slide-img-1.png";
import Img2 from "../images/slide-img-2.png";
import Img3 from "../images/slide-img-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonial.css";

// import required modules
import { Pagination } from "swiper/modules";
function TestimonialSlider() {
  return (
    <div className="testimonial-slider-wrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="testimonial-slide">
            <div className="testimonial-slide-img">
              <img src={Img1} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-slide">
            <div className="testimonial-slide-img">
              <img src={Img2} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="testimonial-slide">
            <div className="testimonial-slide-img">
              <img src={Img3} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="testimonial-slide">
            <div className="testimonial-slide-img">
              <img src={Img3} />
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default TestimonialSlider;
