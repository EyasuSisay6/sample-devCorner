/** @format */

import React from "react";

export default function User({ name = "", iconClass = "", active = false }) {
  return (
    <>
      <li
        className={
          (active
            ? "text-[#73b622] bg-[#eee] mt-0 px-[20px] py-[15px]"
            : "text-[#777] mt-[20px] px-[20px]") +
          " flex justify-between font-light text-base"
        }
      >
        <p className="mb-1">{name}</p>
        <i style={{ fontSize: 20 }} className={`${iconClass}`}></i>
      </li>
    </>
  );
}
