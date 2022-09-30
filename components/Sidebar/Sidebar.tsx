/** @format */

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../Logo/Logo";
import User from "./User";
import Divider from "../Form/Divider";
import List from "../Menu/List";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();

  return (
    <>
      <nav
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          borderRight: "solid 2px #73b622",
          overflow: "unset",
        }}
        className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
      >
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Logo />
          {/* Floating Button */}
          <a
            style={{
              position: "relative",
              width: "30px",
              height: "30px",
              bottom: "15px",
              left: "15px",
              backgroundColor: "#6db313",
              color: "#FFF",
              borderRadius: "50px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
            }}
            className="invisible lg:visible"
          >
            <i className="fa fa-arrow-left"></i>
          </a>
          {/* Collapse */}
          <div
            style={{
              overflow: "unset",
            }}
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"></a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* User Profile */}
            <User />
            {/* Divider */}
            <Divider />
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <List name="Accounts Settings" iconClass="fas fa-cog" />
              <List name="Billing" iconClass="fas fa-university" />
            </ul>
            <Divider />
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <List name="Messaging" iconClass="fas fa-comments" />
            </ul>
            <Divider />
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <List active={true} name="Marketplace" iconClass="fas fa-store" />
              <List name="Bid History" iconClass="fas fa-history" />
              <List name="Active Bids" iconClass="fas fa-bolt" />
            </ul>
            <Divider />
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <List name="Sign Out" iconClass="fas fa-sign-out-alt" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
