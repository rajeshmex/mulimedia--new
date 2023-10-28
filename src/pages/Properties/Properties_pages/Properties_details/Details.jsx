import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, IndianRupee, Plus } from "lucide-react";
import { property } from "../../../../assets/Index";
import CategoryPropertyData from "../../../../Data/Propertiesdata"; // Import your property data

function Details({ tempImg, page }) {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(null);
  const selectedProperty = CategoryPropertyData.find(
    (property) => property.id === parseInt(id)
  );

  const [image, setImage] = useState(tempImg);

  const [num, setNum] = useState(0);
  // Check if selectedProperty exists before accessing its properties
  if (!selectedProperty) {
    return <div>No data found for this ID</div>;
  }

  // Initialize the currentImage when the selectedProperty is available
  if (!currentImage) {
    setCurrentImage(selectedProperty.img);
  }

  const handleThumbnailClick = (newImage) => {
    setCurrentImage(newImage);
  };

  const data = [
    {
      id: "1",
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg",
    },

    {
      id: "1",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RxPKS6VErcRoV96Efj9K8k63ucZsqCrE1CiWGTfVpGm-6G8Vd5CxSIfobtzYp2CAeaI&usqp=CAU",
    },
    {
      id: "1",
      img: "https://realestatedigital.propertiescdn.com/ListingImages/mdbmls/images/0/0/MDWO2003974.jpg?ts=637817641200000000",
    },
    {
      id: "1",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RxPKS6VErcRoV96Efj9K8k63ucZsqCrE1CiWGTfVpGm-6G8Vd5CxSIfobtzYp2CAeaI&usqp=CAU",
    },
    {
      id: "1",
      img: "https://realestatedigital.propertiescdn.com/ListingImages/mdbmls/images/0/0/MDWO2003974.jpg?ts=637817641200000000",
    },
    {
      id: "1",
      img: "https://realestatedigital.propertiescdn.com/ListingImages/mdbmls/images/0/0/MDWO2003974.jpg?ts=637817641200000000",
    },
    {
      id: "1",
      img: "https://realestatedigital.propertiescdn.com/ListingImages/mdbmls/images/0/0/MDWO2003974.jpg?ts=637817641200000000",
    },
  ];

  const [zoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container-fluid px-5 py-24 mx-auto flex justify-center items-start  ">
        <div className="w-full md:w-[65%]  p-1 md:min-h-[600px] min-h-[350px] ">
          <div className="w-full h-full rounded-sm flex gap-2 ">
            <div
              className="w-[20%] flex flex-col overflow-x-auto overflow-y-hidden  h-[70%]  gap-1  relative"
              style={{ marginTop: "45px" }}
            >
              <div className="absolute left-[0px] top-0 bottom-0  flex items-center justify-center ">
                <ChevronLeft size={28} />
              </div>
              {data.map((elm, i) => (
                <div className="w-full h-full  min-w-1/5 " key={i}>
                  <img
                    src={elm?.img}
                    alt=""
                    className="w-2/3 h-2/3 object-cover rounded-md border-[1px] border-transparent hover:border-black"
                    onClick={() => setNum(i)}
                  />
                </div>
              ))}
              <div className="absolute right-[5px] top-0 bottom-0 flex items-center justify-center ">
                <ChevronRight size={28} />
              </div>
            </div>

            {/* <div className="border h-[448px]">
              <div className="overflow-hidden relative h-full m-0 p-0">
                <div className="h-[1152px] block">
                  <ul className="transform -translate-y-[-448px]">
                    <li className="w-[64px] h-[64px]">
                      <div className="p-5 w-full h-full relative">
                        <div className="w-full h-full">
                          <img
                            className="max-h-full max-w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            src={data[0].img}
                          />
                        </div>
                      </div>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div> */}

            <div className="w-full h-[100%] relative">
              <img
                src={data[num]?.img}
                alt=""
                className="w-full h-full object-contain "
              />

              <div className="absolute top-1 right-2 bg-white text-black">
                <span className="uppercase md:text-lg text-base px-2 border">
                  TS Code : ts2345i
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex  items-center justify-center py-1">
            {num}/{data.length}
          </div>
        </div>
        <div className="lg:w-2/5 h-full justify-center flex flex-wrap">
          {/* <img
            alt="Property"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={currentImage} // Display the current image
          /> */}

          {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            Thumbnail images
            {selectedProperty.thumbnailImages.map((thumbnail, index) => (
              <img
                key={index}
                alt="Thumbnail"
                className="cursor-pointer w-16 h-16 object-cover object-center rounded mr-2 border"
                src={thumbnail}
                onClick={() => handleThumbnailClick(thumbnail)}
              />
            ))}
          </div> */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {selectedProperty.sellername}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {selectedProperty.category}
            </h1>
            {/* <div className="flex mb-4">
              stars and social-media
            </div> */}
            <p className="leading-relaxed">
              {selectedProperty.description}
              {selectedProperty.contact}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $ {selectedProperty.price}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
