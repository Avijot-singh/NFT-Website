import React from 'react'
import Digitalassets from '../Components/Digitalassets'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Dropdown from "../Components/Dropdown";

function Assets() {
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

    <Digitalassets/>
    <Footer />
  </>
  )
}

export default Assets