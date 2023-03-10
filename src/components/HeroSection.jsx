import React from "react";
import ColumnChart from "../assets/Frame 4.png";
import PieChart from "../assets/Frame 5.png";
import BackgroundImg from "../assets/Ellipse 1.png";

const HeroSection = () => {
  return (
    <>
      {/* Main Div */}
      <div className=" flex  items-center justify-evenly bg-black px-32 pt-24">
        {/* Div 1 */}
        <div>
          <h1 className="text-[#EEEEEE] text-4xl font-semibold leading-snug mb-6">
            Streamline How <br />
            You Manage{" "}
            <span className="text-[#66B8FF] font-semibold ml-4 absolute">
              ESOPs
            </span>
          </h1>
          <p className="text-[#9F9F9F] text-xl font-normal text-justify w-[45%] ">
            Incentiv offers an easy way for employers to issue ESOPs/grants, and
            allow employees to easily accept, track, exercise, and sell their
            granted shares.
          </p>
          <button className="flex item-start text-center justify-center bg-gradient-to-r from-blue-800 to-cyan-500  rounded-xl py-5  my-16 text-white w-[17rem] text-2xl">
            Request a Demo
          </button>
        </div>

        {/* Div 2 */}
        <div className="flex items-start mr-60 gap-8 ">
          <img src={BackgroundImg} className="absolute " alt="" />
          <img src={ColumnChart} alt="" />
          <img src={PieChart} className="mt-24" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
