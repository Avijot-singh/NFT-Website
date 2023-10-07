import React, { useState, useEffect, useRef } from "react";
import user from "../img/user.png";
import edit from "../img/edit.png";
import inbox from "../img/envelope.png";
import settings from "../img/settings.png";
import help from "../img/question.png";
import logout from "../img/log-out.png";
import "../style/Dropdown.css";
import { Link } from "react-router-dom";
// import "../style/navbar.css";
import DropdownItem from "./DropdownItem";
import {CgProfile} from "react-icons/cg";

function Dropdown() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="App">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <CgProfile/>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <h3>
            John Doe
            <br />
            <span>NFT Buyer & Seller</span>
          </h3>
          <ul>
       
              <Link className="special-link" to="/MyProfile">
              <DropdownItem link img={user} text={"My Profile"}></DropdownItem></Link>
            <Link className="special-link" to="/Logout">
               <DropdownItem link img={logout} text={"Logout"}></DropdownItem></Link>
            
             
            <DropdownItem img={edit} text={"Edit Profile"} />
            <DropdownItem img={inbox} text={"Inbox"} />
            <DropdownItem img={settings} text={"Settings"} />
            <DropdownItem img={help} text={"Helps"} />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

// function DropdownItem(props) {
//   return (
//     <li className="dropdownItem">
//       <img src={props.img}></img>
//       <a> {props.text} </a>
//     </li>
//   );
// }

export default Dropdown;