import React, { useState } from "react";
import EmptyDashboard from "../assets/EmptyDashboard.png";
import dashboardImg from "../assets/dashboard .png";
import Fade from "react-reveal/Fade";

const Dashboard = () => {
  const [show, setShow] = useState(1);

  const handleClick = () => {
    switch (show) {
      case 1:
        return setShow(2);
      case 2:
        return setShow(1);
      default:
    }
  };
  return (
    <>
      {/* Parent Div */}
      <div className="flex items-center justify-evenly bg-gradient px-30 py-30 pb-16">
        {/* Img Div */}
        <div
          onClick={handleClick}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <img src={EmptyDashboard} alt="" />
          <Fade bottom when={show === 1}>
            <img className="absolute mt-10" src={dashboardImg} alt="" />
          </Fade>
        </div>

        {/* Text Div */}

        <div className="flex-col items-center w-56">
          <h1 className="text-xl text-blue-500 font-bold mb-4 mt-8">
            Intuitive Dashboards
          </h1>
          <p className="text-gray-400 text-justify">
            Allows employers to easily track employee option pool, vesting
            schedules, options outstanding, exercises etc and take action
            accordingly.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
