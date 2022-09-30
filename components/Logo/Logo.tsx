/** @format */

import React from "react";

export default function Logo() {
  return (
    <>
      <div className="flex items-center h-[50px] w-[85%] my-0 mx-auto">
        <div className="flex justify-center items-center rounded-[50%] bg-[#0095d5] w-[40px] h-[40px]">
          <div className="flex justify-center items-center rounded-[50%] h-[35px] w-[35px] bg-white">
            <div className="flex justify-center items-center rounded-[50%] h-[25px] w-[25px] bg-[#73b622]">
              <div className="h-[17px] w-[17px] rounded-[50%] bg-white"></div>
            </div>
          </div>
        </div>
        <div className="ml-[7px]">
          <div
            style={{
              lineHeight: 1,
            }}
            className="text-[18px] text-[#777] font-semibold"
          >
            OmniDantis
          </div>
        </div>
      </div>
    </>
  );
}
