import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
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
        <div>
          <Button label={"View Detail"} iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="" />
      </div>
    </section>
  );
};

export default SuperQuality;
