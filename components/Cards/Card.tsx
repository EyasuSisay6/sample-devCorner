/** @format */

import React from "react";

// import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar({ loading = false }) {
  const information = {
    ["Loan"]: "Mortgage",

    ["Property"]: "Single Family",

    ["Address"]: "123 Main St, New York,NY 1032",

    ["Square Footage"]: "720",

    ["Lot Size"]: "120,000",
  };
  const footerInformation = [
    { label: "Owner Occupied", value: "YES" },
    { label: "Interest Only Loans", value: "NO" },
    { label: "Time to Close", value: "30 Days" },
    { label: "Calculate LTV/LTC", value: "80%" },
    { label: "FICO Score", value: "720" },
    { label: "Purchase Budget", value: "$500,000" },
    { label: "Money Down", value: "$100,000" },
  ];

  const printLabel = (label = "") => {
    return (
      <p className="text-xs text-[#777]">
        {label}:{" "}
        <span className="text-[11px] font-semibold text-[#0095d5]">
          {/* @ts-ignore  */}
          {information[label]}
        </span>
      </p>
    );
  };

  const footer = footerInformation.map((footer) => (
    <p className="text-[11px] font-light text-[#ccecf7]">
      {footer.label}:{" "}
      <span className="text-[11px] font-bold text-white">{footer.value}</span>
    </p>
  ));
  return (
    <>
      <div className="w-[350px]">
        <div
          className={
            (loading ? `text-[#777] bg-[#d4d6d8]` : `text-white bg-[#6db313]`) +
            " w-[180px] text-[11px] py-[5px] px-[10px] rounded"
          }
        >
          {!loading ? (
            <p>
              SUBMIT TERM SHEET BID <span className="text-sm">$</span>{" "}
            </p>
          ) : (
            <p>
              <i className="fas fa-hourglass"></i>
              {"      "}BID PENDING
            </p>
          )}
        </div>
        <div className="bg-white z-2 mt-[-5px] rounded">
          <div className="flex">
            <div className="flex justify-center items-center w-[100px] h-[120px] flex-col">
              <div className="flex justify-center items-center bg-[#e6e7e8] rounded-[50px] h-[50px] w-[50px]">
                <i className="fas fa-user text-3xl text-[#777]"></i>
              </div>
              <p className="ml-[10px] text-[#777] text-xs mx-[5px] font-semibold">
                Investor ID#
              </p>
            </div>
            <div className="mx-[5px] my-[15px]">
              <p className="text-[#0095d5] text-sm my-[5px] font-semibold">
                Number and/or Title
              </p>
              <div className="h-px w-[220px] bg-[#777] mb-[5px]"></div>
              <div className="flex justify-between">
                {printLabel("Loan")}
                {printLabel("Property")}
              </div>
              {printLabel("Address")}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {printLabel("Square Footage")}
                {printLabel("Lot Size")}
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-[#0095d6] text-white text-xs p-[15px] pt-[10px] rounded-[6px] rounded-t-none">
            <div>{footer.slice(0, 4)}</div>
            <div
              style={{ height: "70px", width: 1, backgroundColor: "white" }}
            ></div>
            <div>{footer.slice(4)}</div>
          </div>
        </div>
      </div>
    </>
  );
}
