import React, { useState, useEffect } from "react";
import editcard from "../../../assets/images/prop2.jpeg";

const EditorialCard = () => {
  const imagedata = [
    {
      id: 1,
      img: editcard,
    },
    {
      id: 2,
      img: editcard,
    },
    {
      id: 3,
      img: editcard,
    },
    {
      id: 4,
      img: editcard,
    },
    {
      id: 5,
      img: editcard,
    },
    {
      id: 6,
      img: editcard,
    },
    {
      id: 7,
      img: editcard,
    },
    {
      id: 8,
      img: editcard,
    },
    {
      id: 9,
      img: editcard,
    },
  ];

  const itemsPerPage = 1;
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
    }, 1000); // 10 seconds

    return () => clearInterval(intervalId);
  }, [imagedata]);
  return (
    <>
      <div className="mt-4 w-full h-full p-5">
        <h1 className="text-2xl md:text-2xl lg:text-3xl mb-4 ml-5 font-bold ">
          Advocate
        </h1>
        {visibleData.map((val, id) => {
          return (
            <>
              <a className="a-link-normal" target="_blank" href="#" key={id}>
                <img
                  alt="image"
                  src={val.img}
                  height="100%"
                  width="100%"
                  data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Jupiter23/Event/Train_GW_editorial_1500x323._CB575880778_.jpg"
                  className="w-full h-full"
                />
              </a>
            </>
          );
        })}
      </div>
    </>
  );
};

export default EditorialCard;
