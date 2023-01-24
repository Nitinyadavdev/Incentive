import React from "react";
import PieChart from "@mui/icons-material/DonutSmall";
import PersonIcon from "@mui/icons-material/Person";

const Items = [
  {
    id: 1,
    title: "Company",
    icon: <PieChart />,
    desc: "This is an example of a benefit for the employer.",
  },
  {
    id: 2,
    title: "Employee",
    icon: <PersonIcon />,
    desc: "This is an example of a benefit for the employer.",
  },
];

const LitItem = ({ item }) => {
  return <li>{item.desc}</li>;
};

const Offers = () => {
  return (
    <>
      {/* Parent div */}
      <div className="flex flex-col px-32 py-32 bg-black">
        <h1 className="text-2xl font-semibold text-gray-300 mb-10 ml-12">
          What We Offer
        </h1>
        {/* Box Div */}
        <div className="offer-gradient text-gray-200 flex justify-between rounded-3xl px-32 py-20 flex-wrap">
          {/* 2 Div */}
          {Items?.map((item, i) => (
            <div>
              {/* Headline Div */}
              <div className="flex items-center justify-between border-gray-300 border gap-4 bg-black rounded-2xl p-3 w-[150px] mb-4 mt-9  ">
                <h1 className="text-xl font-semibold text-[#DDDDDD]">
                  {item.title}
                </h1>
                {item.icon}
              </div>
              {/* Body Div */}
              <div className="flex items-center justify-start bg-black border border-gray-300 rounded-[30px] flex-col px-10 gap-6 py-10 text-[#DDDDDD] ">
                <LitItem item={item} />
                <LitItem item={item} />
                <LitItem item={item} />
                <LitItem item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Offers;
