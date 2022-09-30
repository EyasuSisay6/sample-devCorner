/** @format */

import React from "react";

import TextBox from "../Form/TextBox";

export default function Navbar() {
  return (
    <>
      <div>
        <div
          style={{
            width: "calc(100% - 60px)",
            borderBottom: "1px solid #6db313",
          }}
          className="hidden lg:flex items-center justify-between m-auto h-[65px]"
        >
          <div className="flex items-center">
            <TextBox />
            <div className="ml-[30px] flex">
              <i className="fas fa-store text-[#6db313] text-[20px]"></i>
              <p className="ml-3 text-[#777]">Marketplace</p>
              <div className="ml-3 bg-[#777] w-px h-[25px]"></div>
              <p className="ml-3 text-[#777] font-light">
                Sorted by preference x,y and/or z
              </p>
            </div>
          </div>
          <div className="text-[#777]">
            <i className="fas fa-comments text-[20px]"></i>
            <i className="fas fa-sign-out-alt text-[20px] ml-7"></i>
          </div>
        </div>
      </div>
    </>
  );
}
