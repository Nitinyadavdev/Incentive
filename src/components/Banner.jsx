import React, { useEffect, useState } from "react";
import Structure from "../assets/Structure.png";
import Vector1 from "../assets/Vector 1.png";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Fade from "react-reveal/Fade";

const Banner = () => {
  const [show, setShow] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    switch (show) {
      case 0:
        return setShow(1);
      case 1:
        return setShow(2);
      case 2:
        return setShow(0);
      default:
    }
  };

  useEffect(() => {
    switch (show) {
      case 0:
        return setProgress(70);
      case 1:
        return setProgress(40);
      case 2:
        return setProgress(10);
      default:
    }
  }, [show]);

  return (
    <>
      {/* Parent Div */}
      <img className="absolute" src={Vector1} alt="vector-ellipse" />
      <div className="flex items-center justify-between flex-wrap bg-black px-32 py-32">
        {/* DIv 1 */}
        <div>
          <h1 className="text-3xl text-gray-400 font-semibold my-20">
            Why Incentive
          </h1>
          <div className="flex items-center cursor-pointer">
            {/* <div> */}
            <Box sx={{ width: "100%", transform: [{ rotate: "90deg" }] }}>
              <LinearProgress
                onClick={handleClick}
                sx={{
                  width: 5,
                  height: 700,
                  color: "magenta",
                  backgroundColor: `#A020F0`,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: `purple`,
                  },
                  "& span.MuiLinearProgress-bar": {
                    transform: `translateY(-${progress}%) !important`, //has to have !important
                  },
                }}
                variant="determinate"
                value={progress}
              />
            </Box>

            <div className="ml-11">
              <div onClick={handleClick}>
                <Fade top when={show === 0}>
                  <h1 className="text-3xl text-purple-800 font-bold my-10">
                    Manage the complete <br />
                    ESOP{" "}
                  </h1>
                  <p className="w-[25rem] text-gray-300">
                    From issuing grants to liquidity events. Handle everything
                    digitally. Manage multiple instruments or unique vesting
                    schedules with ease.
                  </p>
                </Fade>
                <Fade top when={show === 1}>
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
                </Fade>
                <Fade top when={show === 2}>
                  <h1 className="text-3xl text-purple-800 font-bold my-10">
                    Manage the complete <br />
                    ESOP{" "}
                  </h1>
                  <p className="w-[25rem] text-gray-300">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minus vitae iusto ducimus vel. Ipsa consequuntur excepturi
                    harum! Cumque voluptatibus ea blanditiis recusandae sit.
                  </p>
                </Fade>{" "}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* IMG DIV */}
        <div className="mr-40" onClick={handleClick}>
          <img
            src={Structure}
            alt="vector img"
            className={`${
              show ? "rotate-180 transition duration-1000 " : "rotate-90"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
