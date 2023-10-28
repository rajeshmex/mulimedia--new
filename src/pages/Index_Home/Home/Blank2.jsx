import React, { useState, useEffect } from "react";

const Blank2 = () => {
  const cardData = [
    {
      h2: "labour",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "house painter",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "house painter",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "house painter",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "sand",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "house painter",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "raj mistri",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "cement",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "plumber",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "glass",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "iron rods",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "carpainter",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "house painter",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "sand",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "bricks",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },

    {
      h2: "crushed stone",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "sand",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
  ];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [visibleData, setVisibleData] = useState([]);

  const getCurrentPageData = (page) => {
    const startIdx = page * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    return cardData.slice(startIdx, endIdx);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    setVisibleData(getCurrentPageData(currentPage));
  }, [currentPage]);

  return (
    <>
      <div className="w-full md:w-full  mt-2 p-5">
        <h3 className="w-[30%] text-2xl font-bold text-center">Blank2</h3>
        <div className="flex flex-wrap justify-evenly items-center">
          {visibleData.map((val, id) => (
            <div
              key={id}
              className="w-1/3 mt-2 border border-black border-solid flex-col flex justify-center items-center"
            >
              <div className="w-[70%]  rounded-md flex justify-evenly items-center">
                <img
                  src={val.image}
                  alt={val.alt}
                  className="w-full h-auto md:w-[500px] p-1 md:h-[250px]"
                />
              </div>
              <h3 className="p-2 text-xl font-bold">This is a div</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <button onClick={handlePrevious} className="mr-2">
            Previous
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Blank2;
