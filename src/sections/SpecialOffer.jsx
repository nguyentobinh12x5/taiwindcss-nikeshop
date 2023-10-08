import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className=" object-contain w-full"
        ></img>
      </div>
      <div className=" flex flex-col gap-5">
        <h2 className="text-4xl font-palanquin font-bold capitalize lg:max-w-lg">
          We Provide You <span className=" text-coral-red">Super Quality </span>
          Shoes
        </h2>
        <p className=" lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our soght-after
          selections. Discover a world of comfort, design, and value. Experience
          top-notch quality and style with our soght-after selections. Discover
          a world of comfort, design, and value
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label={"View Detail"} />
          <Button
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            label="Learn more"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
