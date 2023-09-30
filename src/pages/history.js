import React from "react";
import Navbar from "../Components/Navbar";
import HistoryTable from "../Components/HistoryTable";
import Footer from "../Components/Footer";
import Dropdown from "../Components/Dropdown";
import "../style/Home.css";

function history() {
  return (
    <>
      <div class="header">
        <div class="navbar">
          <Navbar />
        </div>
        <div class="header-icon">
          <Dropdown />
        </div>
      </div>

      <HistoryTable />
      <Footer />
    </>
  );
}

export default history;
