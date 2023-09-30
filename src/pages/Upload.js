import React from "react";
import UploadForm from "../Components/UploadForm";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Dropdown from "../Components/Dropdown";
import "../style/uploadform.css";

import "../style/Home.css";

function Upload() {
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

      <UploadForm />
      <Footer />
    </>
  );
}

export default Upload;
