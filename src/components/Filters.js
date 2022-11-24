import React from "react";
import { VscKey, VscFlame } from "react-icons/vsc";
import { TbSailboat } from "react-icons/tb";
import { RiAliensLine } from "react-icons/ri";
import { BsTree } from "react-icons/bs";
import Filter from "./Filter";

const Filters = () => {
  const sorting = [
    { title: "Trending", icon: <VscFlame /> },
    { title: "New", icon: <VscKey /> },
    { title: "Unique", icon: <RiAliensLine /> },
    { title: "National Parks", icon: <BsTree /> },
    { title: "Boat", icon: <TbSailboat /> },
  ];

  return (
    <div className="sm:mx-6 md:mx019 lg:mx-12 sticky">
      <div className="flex justify-start gap-3 sm:gap-4 mt-4">
        {sorting.map((obj) => (
          <Filter key={obj} title={obj.title} icon={obj.icon} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
