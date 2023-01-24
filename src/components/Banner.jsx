import React from "react";
import Structure from "../assets/Structure.png";
import BlackLine from "../assets/Vector 1.png";

const Banner = () => {
  return (
    <>
      {/* Parent Div */}
      <img className="absolute" src={BlackLine} alt="vector-ellipse" />
      <div className="flex items-center justify-between flex-wrap bg-black px-32 py-32">
        {/* DIv 1 */}
        <div>
          <h1 className="text-3xl text-gray-400 font-semibold my-20 ml-12">
            Why Incentive
          </h1>
          <div className="flex items-center cursor-pointer">
            <div className="ml-11">
              <div>
                <h1 className="text-3xl text-purple-800 font-bold my-10">
                  Manage the complete <br />
                  ESOP{" "}
                </h1>
                <p className="w-[25rem] text-gray-300">
                  From issuing grants to liquidity events. Handle everything
                  digitally. Manage multiple instruments or unique vesting
                  schedules with ease.
                </p>

                <h1 className="text-3xl text-purple-800 font-bold my-10">
                  Single Source of Truth
                  <br />
                  ESOP{" "}
                </h1>
                <p className="w-[25rem] text-gray-300">
                  All transactions updated in real time, whether it is a grant
                  being issued, employee exiting or options being exercised.
                  Connected data flows mean fewer errors. Every event recorded
                  with a complete audit trail.
                </p>

                <h1 className="text-3xl text-purple-800 font-bold my-10">
                  Manage the complete <br />
                  ESOP{" "}
                </h1>
                <p className="w-[25rem] text-gray-300">
                  From issuing grants to liquidity events. Handle everything
                  digitally. Manage multiple instruments or unique vesting
                  schedules with ease.
                </p>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* IMG DIV */}
        <div className="mr-40">
          <img src={Structure} alt="vector img" />
        </div>
      </div>
    </>
  );
};

export default Banner;
