import React, { useState, useEffect } from "react";

const Sand = () => {
  const cardData = [
    {
      h2: "labour",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
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
      h2: "cement",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
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

  const itemsPerPage = 1;
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
  }, [cardData]);
  return (
    <>
      <div className=" bg-white">
        <h1 className="text-3xl font-bold pl-5 font-serif">Home Build</h1>
        <div className="flex flex-wrap">
          <div className=" flex flex-wrap ">
            {visibleData.map((val, index) => (
              <div key={index} className="">
                <div className=" bg-white p-2 flex ">
                  <div className="flex flex-col p-2 border justify-center">
                    <p
                      className="uppercase text-xl font-bold font-serif text-center border bg-black text-white "
                      style={{ letterSpacing: "2px" }}
                    >
                      {val.h2}
                    </p>
                    <div className="w-[100%] flex justify-center items-center">
                      <img
                        src={val.image}
                        alt={val.alt}
                        // style={{ height: "100%", width: "180px" }}
                        className="w-[400px] h-[372px] p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex flex-wrap justify-start items-center">
            {visibleData.map((val, index) => (
              <div key={index} className="">
                <div className=" bg-white p-2 flex flex-row ">
                  <div className="flex flex-col p-2 border justify-evenly">
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
          <div className=" flex flex-wrap ">
            {visibleData.map((val, index) => (
              <div key={index} className="">
                <div className=" bg-white p-2 flex ">
                  <div className="flex flex-col p-2 border justify-center">
                    <p
                      className="uppercase text-xl font-bold font-serif text-center border bg-black text-white "
                      style={{ letterSpacing: "2px" }}
                    >
                      {val.h2}
                    </p>
                    <div className="w-[100%] flex justify-center items-center">
                      <img
                        src={val.image}
                        alt={val.alt}
                        // style={{ height: "100%", width: "180px" }}
                        className="w-[400px] h-[372px] p-2"
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

export default Sand;
