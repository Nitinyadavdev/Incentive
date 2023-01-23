import {
  ContactMail,
  HeadphonesOutlined,
  MonetizationOn,
  ShowChart,
} from "@mui/icons-material";
import React from "react";

const Form = () => {
  return (
    <>
      {/* Box Div */}
      <div className=" bg-black  ">
        {/* Parent Div */}

        <div className="flex justify-between px-9">
          {/* Main div */}
          <div className=" flex-1 w-32 pl-5 gap-4 py-56">
            <h1 className="text-[#7F9AFD] text-4xl font-bold mb-10">
              Are you ready for better way <br /> to manage your ESOPs?
            </h1>
            <p className="text-[#9F9F9F] mb-9 w-5/12 text-2xl mt-10 flex flex-wrap">
              We look forward to show you how our platform allows you to
              optimize the way you manage and issue ESOPs to your employees.
            </p>
            <p className="text-white mb-7 text-3xl pt-10">
              Here’s what you can expect from our demo:
            </p>

            {/* Details */}
            {/* Box set 1 */}
            <div className="flex gap-4 pb-8 mt-32 ">
              {/* First Box */}
              <div className="flex text-white bg-black border border-gray-800 rounded-[30px] px-10 gap-6 py-10  ">
                <HeadphonesOutlined className="stroke-blue-500" />
                <p className="font-semibold">
                  Personalized tour of our platform
                </p>
              </div>

              {/* Second box */}
              <div className="flex text-white bg-black border border-gray-800 rounded-[30px] px-10 gap-6 py-10 ">
                <ContactMail className="stroke-blue-500" />
                <p className="font-semibold">Detailed demo of its functions</p>
              </div>
            </div>

            {/* Box set 2 */}
            <div className="flex gap-4 mt-6">
              {/* Third Box */}
              <div className="flex text-white bg-black border border-gray-800 rounded-[30px] px-10 gap-6 py-10  ">
                <MonetizationOn className="stroke-blue-500" />
                <p className="font-semibold">
                  Pricing details based on your needs
                </p>
              </div>

              {/* Fourth box */}
              <div className="flex text-white bg-black border border-gray-800 rounded-[30px] px-10 gap-6 py-10  ">
                <ShowChart className="stroke-blue-500" />
                <p className="font-semibold">Detailed demo of its functions</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 w- pl-5 gap-4 py-20 mt-24 px-16 mx-24  ">
            <div className="  bg-[#000C34] rounded-[30px] pt-10 pb-28  mx-32  ">
              <h1 className="text-[#7F9AFD] pt-14 text-center mb-4 font-bold gap-5 text-2xl ">
                REQUEST DEMO
              </h1>
              <form className="flex flex-col gap-5 justify-start px-3 mx-9 py-5">
                <input
                  placeholder="Full Name*"
                  className="p-3 text-lg rounded-xl bg-[#7E8AB5] border-none text-black py-3 my-2 "
                  type="text"
                />
                <input
                  placeholder="Organizaion name*"
                  className="p-3 text-lg rounded-xl bg-[#7E8AB5] border-none text-black py-3 my-2"
                  type="text"
                />
                <input
                  placeholder="Company email Id*"
                  className="p-3 text-lg rounded-xl bg-[#7E8AB5] border-none text-black py-3 my-2"
                  type="text"
                />
                <input
                  placeholder="Phone number*"
                  className="p-3 text-lg rounded-xl bg-[#7E8AB5] border-none text-black py-3 my-2"
                  type="number"
                />

                <input
                  placeholder="Tell us more about your needs  "
                  className="p-3 text-lg rounded-xl bg-[#7E8AB5] border-none text-black pb-20"
                  type="text"
                />
                <button className="flex items-start bg-gradient-to-r from-blue-800 to-cyan-500 p-4 text-base font-medium rounded-xl text-center justify-center mt-7 text-white">
                  Request a Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
