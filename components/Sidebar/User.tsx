/** @format */

import React from "react";

export default function User() {
  return (
    <>
      <div className="flex h-[50px] w-[85%] mt-[-30px] mx-auto mb-0">
        <div className="h-[50px] w-[50px] rounded-[50%] bg-[#e6e7e8] flex justify-center items-center">
          <i className="fas fa-user text-[30px] text-[#777]"></i>
        </div>
        <div className="ml-2">
          <div className="text-[#777] text-[13px] font-extralight">
            Welcome Lender!
          </div>
          <div
            style={{
              lineHeight: 1,
            }}
            className="text-[18px] text-[#777]"
          >
            Full Name
          </div>
        </div>
      </div>
    </>
  );
}
