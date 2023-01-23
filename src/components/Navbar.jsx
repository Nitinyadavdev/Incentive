import React, { useState } from "react";
import Hamburger from "hamburger-react";

const Items = ["Features", "About Us", "Pricing", "Login"];

const Navbar = () => {
  const [showList, setShowList] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handel = () => setShowList(!showList);

  return (
    // Main Div
    <>
      <div className="flex items-center justify-between bg-black">
        <div>
          <h1 className="text-3xl text-[#676767] font-bold cursor-pointer hover:text-[#b8b8b8] transition duration-150 ease-in-out ">
            {" "}
            incentive.
          </h1>
        </div>
        <div className=" text-white flex list-none items-center">
          <div
            onClick={handel}
            className=" hidden  md:block lg:hidden sm:block max-[640px]:block"
          >
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
          {""}
          {Items?.map((item, i) => (
            <li className="mx-10 md:hidden sm: hidden lg:flex max-[640px]:hidden text-xl font-medium hover:text-[#676767] transition-all duration-100 ease-in cursor-pointer ">
              {item}
            </li>
          ))}
        </div>
      </div>

      {showList ? (
        <div className=" flex flex-col justify-evenly items-center bg-black text-white">
          {Items?.map((item, i) => (
            <li className=" mx-10 list-none text-lg font-medium cursor-pointer hover:text-[#676767] transition-all duration-100 ease-in">
              {item}
            </li>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;