import React, { useState, useEffect } from "react";

const PropertySlider = () => {
  const cardData = [
    {
      h2: "office",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "shop",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "land",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "building",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "home",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "shop",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "building",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "shop",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "home",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },

    {
      h2: "land",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "shop",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
  ];

  const itemsPerPage = 3;
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
    }, 5000); // 10 seconds

    return () => clearInterval(intervalId);
  }, [currentPage, cardData, itemsPerPage]);
  return (
    <>
      <div className=" bg-white">
        <h1 className="text-3xl font-bold p-3">Filling Forms</h1>
        <div className=" flex flex-wrap justify-center items-center">
          {visibleData.map((val, index) => (
            <div key={index} className="">
              <div className=" bg-white p-2 flex flex-row ">
                <div className="flex flex-col p-2 border ">
                  <p
                    className="uppercase text-xl font-bold font-serif text-center border bg-black text-white "
                    style={{ letterSpacing: "2px" }}
                  >
                    {val.h2}
                  </p>
                  <div className="w-[100%] p-2 gap-3  flex">
                    <img
                      src={val.image}
                      alt={val.alt}
                      style={{ height: "170px", width: "180px" }}
                    />
                    <img
                      src={val.image}
                      alt={val.alt}
                      style={{ height: "170px", width: "180px" }}
                    />
                  </div>
                  <div className="w-[100%] gap-3 p-2 flex">
                    <img
                      src={val.image}
                      alt={val.alt}
                      style={{ height: "170px", width: "180px" }}
                    />
                    <img
                      src={val.image}
                      alt={val.alt}
                      style={{ height: "170px", width: "180px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertySlider;
