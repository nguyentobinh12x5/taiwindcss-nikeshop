import React from "react";

const ShoeCard = ({ imgURL, bigShoeImage, changeBigShoeImage }) => {
  const handleClick = () => {
    changeBigShoeImage(imgURL.bigShoe);
  };
  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-contain"
        ></img>
      </div>
    </div>
  );
};

export default ShoeCard;
