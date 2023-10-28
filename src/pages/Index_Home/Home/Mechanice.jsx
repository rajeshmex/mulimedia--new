import React from "react";

const Mechanice = () => {
  const data = [
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/6ae6496d87b04fbc.jpg?q=90",
    },
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/6ae6496d87b04fbc.jpg?q=90",
    },
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/6ae6496d87b04fbc.jpg?q=90",
    },
    {
      img: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/6ae6496d87b04fbc.jpg?q=90",
    },
  ];

  return (
    <>
      {" "}
      <div className="bg-slate-200 border-1 h-full text-white flex items-center justify-center mb-3">
        <div>
          <h1 className="ml-16 text-2xl text-black mt-3 font-bold">
            Machenice
          </h1>
          <marquee>
            <div className="w-full h-full flex gap-3">
              <div className="grid-formation grid-column-3 flex flex-wrap p-5">
                {data.map((val, id) => (
                  <div className="mr-4 ml-4 " key={id}>
                    <div>
                      <a
                        className="flex flex-col items-stretch border-0 box-border flex-grow relative"
                        href="#"
                      >
                        <div
                          className="w-full"
                          style={{ "--aspect-ratio": "41/22" }}
                        >
                          <img
                            src={val.img}
                            alt="Image"
                            className="w-full h-full object-cover hover:scale-105"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Mechanice;
