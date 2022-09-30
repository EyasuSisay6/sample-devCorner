/** @format */

import Layout from "@/components/Layout";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Card from "@/components/Cards/Card";

const Home = () => {
  var cards = [];
  for (var i = 0; i < 9; i++) {
    cards.push(<Card loading={i === 1} key={i} />);
  }
  return (
    <Layout>
      <AdminNavbar></AdminNavbar>
      <div className="py-[30px] px-[40px] bg-[#eeeeee]">
        <h1 className="text-[#6db313] text-[25px] font-semibold">
          Marketplace Listings
        </h1>
        <div className="bg-[#6db313] w-full h-px mt-1"></div>
        <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-[30px]">
          {cards}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
