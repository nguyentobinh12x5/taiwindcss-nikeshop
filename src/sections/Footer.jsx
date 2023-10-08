import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <section className="max-container">
      <div className=" flex justify-center items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="text-white-400 mt-6 text-base sm:max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            consectetur, facilis, numquam inventore sint quod vero reiciendis
            nemo, illum cumque esse placeat vel iusto aliquam.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => {
              return (
                <div className="flex justify-center w-12 items-center h-12 bg-white rounded-full">
                  <img src={icon.src}></img>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between lg:gap-10 gap-20">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-xl leading-normal mb-6 font-medium">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 text-white-400 font-montserrat leading-normal cursor-pointer hover:text-slate-gray">
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            width={20}
            height={20}
            className="rounded-full m-0"
          ></img>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className=" font-montserrat cursor-pointer">Term & Conditions</p>
      </div>
    </section>
  );
};
export default Footer;
