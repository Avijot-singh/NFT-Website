import React from "react";

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img} alt={props.text} />
      <span> {props.text} </span>
    </li>
  );
}



export default DropdownItem;