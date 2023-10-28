import React, { useState, useEffect } from "react";
import lakme from "../../../assets/images/banner.jpg";

const HomeBuild2 = () => {
  const imagedata = [
    {
      id: 1,
      img: lakme,
    },
    {
      id: 2,
      img: lakme,
    },
    {
      id: 3,
      img: lakme,
    },
    {
      id: 4,
      img: lakme,
    },
    {
      id: 5,
      img: lakme,
    },
    {
      id: 6,
      img: lakme,
    },
    {
      id: 7,
      img: lakme,
    },
    {
      id: 8,
      img: lakme,
    },
    {
      id: 9,
      img: lakme,
    },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  // Function to get the data for the current page
  const getCurrentPageData = () => {
    const startIdx = currentPage * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    return imagedata.slice(startIdx, endIdx);
  };

  const [visibleData, setVisibleData] = useState(getCurrentPageData());

  useEffect(() => {
    // Update data every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentPage(
        (prevPage) => (prevPage + 1) % (imagedata.length / itemsPerPage)
      );
      setVisibleData(getCurrentPageData());
    }, 5000); // 10 seconds

    return () => clearInterval(intervalId);
  }, [currentPage, imagedata, itemsPerPage]);

  return (
    <div className="max-w-full bg-slate-200 md:w-full">
      <div className="w-full p-5 mx-auto bg-white flex flex-col items-start justify-center ">
        <h1 className="text-2xl md:text-2xl lg:text-3xl mb-4 ml-5 ">
          Starting ₹99 + 20% cashback on the first order | Beauty & makeup
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-2 md:gap-0 items-center ">
          {visibleData.map((val, id) => (
            <div
              className="w-full flex justify-center items-baseline md:w-1/2 lg:w-1/5 pl-5"
              key={id}
            >
              <img
                src={val.img}
                alt="image-value"
                className="w-[80px] h-[30vh]  rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBuild2;
