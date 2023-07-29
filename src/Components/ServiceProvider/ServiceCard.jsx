import React, { useState } from 'react';

const ServiceCard = ({ item }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <>
      <div className="w-full rounded-md shadow-md border-2 border-[#0084FF] p-2 my-auto custom-drop-software-develop-section">
        <div className="p-3 bg-[#0D1A36] rounded-md">
          <img src={item.Image} alt="" className="object-cover object-center w-full rounded-t-md h-72 rounded-md" />
          <div className="flex md:flex-row md:flex-wrap flex-col justify-between p-6 space-y-8 z-[60]">
            <div className="space-y-2">
              <h2 className="text-2xl font-[500] text-white">{item.name}</h2>
              {showFullDescription ? (
                <p className="text-[#AFB1B6] text-[17px] lg:text-left text-justify">{item.desc}</p>
              ) : (
                <p className="text-[#AFB1B6] text-[17px] lg:text-left text-justify text-just line-clamp-3">{item.desc}</p>
              )}
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#1c40bf] hover:bg-[#3454C4] text-gray-50"
              onClick={toggleDescription}
            >
              {showFullDescription ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
