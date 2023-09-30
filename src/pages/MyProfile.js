import React, { useState } from 'react';
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Dropdown from "../Components/Dropdown";
import MyForm from "../Components/Form";
import "../style/Home.css";
function MyProfile() {
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

      <MyForm />
          


     
      <Footer />
    </>
    );
    
    
}

export default MyProfile;
