import React from "react";
import SideList from "./SideList";
import {
  MdWindow,
  MdEmail,
  MdOutlineTravelExplore,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { DiGoogleAnalytics } from "react-icons/di";
import { CgProfile } from "react-icons/cg";
import DevList from "./DevList";
import { footerList, devList } from "../../mock/constants";

export const sidelist = [
  { icon: <MdWindow />, label: "Home", active: true },
  { icon: <MdEmail />, label: "JobInvites", active: false },
  { icon: <DiGoogleAnalytics />, label: "analytics", active: false },
  { icon: <CgProfile />, label: "My Profile", active: false },
  { icon: <MdOutlineTravelExplore />, label: "Explore", active: false },
];

const SideBar = () => {
  return (
    <div className="hidden lg:block w-[20vw] pt-5  h-[95vh]  relative border-r-2 border-gray-300">
      <div className="px-5">
        {sidelist.map((item, index) => (
          <SideList
            key={index}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}
      </div>

      <hr className="mt-10 border-t-2 border-gray-300" />
      <h1 className="text-lg font-extrabold mt-5">Communities Feed</h1>
      <div className="flex flex-col gap-4 mt-5 px-5">
        {devList.map((item, index) => (
          <DevList key={index} item={item} />
        ))}
      </div>
      <p className="mt-5 mb-3 w-1/2 mx-auto text-[#8314ff] flex gap-2 items-center">
        See 5 More
        <span>
          <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} />
        </span>
      </p>
      <div className="absolute bottom--20">
        <div className=" flex w-full pl-0 justify-center flex-wrap gap-3 opacity-60">
          {footerList.map((item, index) => (
            <span className="text-sm" key={index}>
              {item}
            </span>
          ))}
        </div>
        <div className="w-full flex justify-center items-center gap-3">
          <span className="font-extrabold text-lg text-[#8314ff] ">
            sphere.io
          </span>
          <span>{"©"} 2023</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
