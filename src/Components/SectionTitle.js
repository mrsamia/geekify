import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import Line from "../Images/line.png";

function SectionTitle(props) {
  return (
    <div className="d-flex">
          <img src={Line} alt="img" className="line" />
          <h3 className="membershipTitle">{props.name}</h3>       
    </div>
  );
}

export default SectionTitle;
