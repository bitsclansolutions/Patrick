import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../images/slide-img-1.png";
import Img2 from "../images/slide-img-2.png";
import Img3 from "../images/slide-img-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./learningSection.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { getTranslation } from "../../../../utils/getTranslation";
function LearningSlider() {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  return (
    <div className="learning-slider-wrapper">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="learning-slide">
            <div className="learning-slide-img">
              <img src={Img1} />
            </div>
            <p className="learning-slide-heading">
              {" "}
              {getTranslation("exercise01", isDutch)}
            </p>
            <p className="learning-slide-des">
              {getTranslation("exercise01Des", isDutch)}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="learning-slide">
            <div className="learning-slide-img">
              <img src={Img2} />
            </div>
            <p className="learning-slide-heading">
              {" "}
              {getTranslation("exercise02", isDutch)}
            </p>
            <p className="learning-slide-des">
              {getTranslation("exercise02Des", isDutch)}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="learning-slide">
            <div className="learning-slide-img">
              <img src={Img3} />
            </div>
            <p className="learning-slide-heading">
              {" "}
              {getTranslation("iqTest", isDutch)}
            </p>
            <p className="learning-slide-des">
              {getTranslation("iqTestDes", isDutch)}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="learning-slide">
            <div className="learning-slide-img">
              <img src={Img1} />
            </div>
            <p className="learning-slide-heading">
              {" "}
              {getTranslation("exercise01", isDutch)}
            </p>
            <p className="learning-slide-des">
              {getTranslation("exercise01Des", isDutch)}
            </p>
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

export default LearningSlider;
