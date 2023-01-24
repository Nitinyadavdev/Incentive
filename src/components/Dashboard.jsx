import React from "react";
import EmptyDashboard from "../assets/EmptyDashboard.png";
import dashboardImg from "../assets/dashboard .png";

const Dashboard = () => {
  return (
    <>
      {/* Parent Div */}
      <div className="flex items-center justify-evenly bg-gradient px-30 py-36  flex-wrap">
        {/* Img Div */}
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <img src={EmptyDashboard} alt="" />

          <img className="absolute mt-10" src={dashboardImg} alt="" />
        </div>

        {/* Text Div */}

        <div className="flex-col items-center  ">
          <h1 className="text-5xl text-blue-500 font-bold mb-4 mt-8 items-center">
            Intuitive Dashboards
          </h1>
          <p className="text-gray-400 text-justify font-semibold text-2xl items-start">
            Allows employers to easily track employee option pool, vesting{" "}
            <br />
            schedules, options outstanding, exercises etc and take action
            <br />
            accordingly.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
