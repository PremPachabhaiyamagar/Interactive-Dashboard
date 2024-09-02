import React from "react";

interface IDevList {
  item: {
    title: string;
    members: number;
    img: string;
  };
}

const DevList: React.FC<IDevList> = ({ item }) => {
  console.log(item);
  // const imgUrl = new URL(
  //   `../../src/assets/images/${item.img}.jpeg`,
  //   import.meta.url
  // ).href;
  console.log(item);
  return (
    <>
      <div className="w-full flex gap-2 items-center">
        <div
          className={`h-10 w-10 rounded-full bg-[url("../../assets/image1.jpeg")] bg-center bg-cover`}
        >
          <img
            src={""}
            className="rounded-full max-h-10 min-w-full"
            alt="logo"
          />
        </div>
        <div>
          <h2 className="">{item.title}</h2>
          <span className="text-gray-500 ">{item.members} Members</span>
        </div>
      </div>
    </>
  );
};

export default DevList;
