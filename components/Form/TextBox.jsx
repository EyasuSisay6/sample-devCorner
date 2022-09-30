/** @format */

import React from "react";

export default function () {
  return (
    <div className="rounded-[30px] bg-[#eee] w-[250px] h-[40px]">
      <i className="fas fa-search text-[15px] ml-[10px] text-[#777] mr-[10px]"></i>
      <input
        className="border-[0px] bg-transparent rounded-[30px] h-[40px]"
        disabled
        type="text"
        placeholder="Search here..."
      ></input>
    </div>
  );
}
