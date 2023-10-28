// eslint-disable-next-line no-unused-vars
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css"; // You can define your custom CSS styles here
import { Navigation } from "swiper/modules";

export default function MainHeader() {
  return (
    <div className="relative">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide>
          <div id="slide1" className="carousel-item relative w-full min-h-200">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
              className="w-full"
              alt="Slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
              className="w-full"
              alt="Slide 2"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h1 className="text-slate-50 text-3xl">Top job </h1>
        <div id="slider" className="overflow-x-auto whitespace-no-wrap flex">
          <div className="min-w-200 w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 rounded shadow-2xl mx-2  bg-slate-50">
            <img
              className="w-full"
              src="https://cdn.pixabay.com/photo/2019/01/19/19/22/recruitment-3942378_640.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            </div>
          </div>
          <div className="min-w-200 w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 rounded shadow-2xl mx-2  bg-slate-50">
            <img
              className="w-full"
              src="https://cdn.pixabay.com/photo/2019/01/19/19/22/recruitment-3942378_640.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            </div>
          </div>
          <div className="min-w-200 w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 rounded shadow-2xl mx-2  bg-slate-50">
            <img
              className="w-full"
              src="https://cdn.pixabay.com/photo/2019/01/19/19/22/recruitment-3942378_640.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
