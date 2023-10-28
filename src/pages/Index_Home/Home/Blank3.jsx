import React, { useState, useEffect } from "react";

const Blank3 = () => {
  const cardData = [
    {
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },

    {
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
  ];

  const style = {
    width: "100vw",
    height: "58vh",
    backgroundSize: "cover",
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  // Function to get the data for the current page
  const getCurrentPageData = () => {
    const startIdx = currentPage * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    return cardData.slice(startIdx, endIdx);
  };

  const [visibleData, setVisibleData] = useState(getCurrentPageData());

  useEffect(() => {
    // Update data every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentPage(
        (prevPage) => (prevPage + 1) % (cardData.length / itemsPerPage)
      );
      setVisibleData(getCurrentPageData());
    }, 10000); // 10 seconds

    return () => clearInterval(intervalId);
  }, [currentPage, cardData, itemsPerPage]);
  return (
    <>
      <div
        className=" bg-slate-300 flex flex-col align-center items-center justify-evenly "
        style={style}
      >
        <div className=" relative ">
          <h1 className="text-start ml-8 font-bold text-3xl text-white">
            Blank3
          </h1>
          <div className="flex justify-evenly align-bottom items-center p-1 w-full ">
            {visibleData.map((val, index) => (
              <div key={index} className="pl-5 ">
                <div className="bg-white ">
                  <div className="flex p-2 justify-evenly ">
                    <div className="w-[100%]">
                      <img
                        src={val.image}
                        alt={val.alt}
                        style={{ height: "300px", width: "230px" }}
                        className="hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blank3;
