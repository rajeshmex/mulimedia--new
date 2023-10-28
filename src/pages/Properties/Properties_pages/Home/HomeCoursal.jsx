import React, { useState, useEffect } from "react";
import { prop1, prop2, prop3, prop4 } from "../../../../assets/Index";
import Card from "../Properties_card/Card";

const Home_Coursal = () => {
  const images = [prop1, prop2, prop3, prop4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle changing the current slide
  const changeImage = (offset) => {
    let newIndex = currentIndex + offset;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    setCurrentIndex(newIndex);
  };

  // Use useEffect to automatically advance the slide every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      changeImage(1);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div
        className="max-w-full mt-2 md:w-full sm:w-full "
        style={{ height: "600px" }}
      >
        <div id="default-carousel" className="relative" data-carousel="static">
          <div
            className="overflow-hidden relative h-[100%] rounded-lg sm:h-64 xl:h-80 2xl:h-96"
            style={{ height: "500px" }}
          >
            {images.map((image, index) => {
              const isCurrent = index === currentIndex;
              return (
                <div
                  key={index}
                  className={`${
                    isCurrent ? "" : "hidden"
                  } duration-700 ease-in-out`}
                  data-carousel-item
                >
                  <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                    {isCurrent ? "Current Slide" : "Other Slide"}
                  </span>
                  <img
                    src={image}
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              );
            })}
          </div>
          {/* Slider indicators */}
          <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full${
                  index === currentIndex ? " bg-blue-500" : " bg-gray-300"
                }`}
                aria-current={index === currentIndex ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={() => changeImage(-1)}
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover-bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={() => changeImage(1)}
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover-bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home_Coursal;
