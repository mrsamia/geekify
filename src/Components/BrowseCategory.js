import React from "react";
import { NavLink } from "react-router-dom";
import Cad from "../Images/cloud-application.png";

const value = [
  {
    title: "Cloud Application Development",
    img: "../Images/cloud-application.png",
  },
  {
    title: "Cloud Application Development",
    img: "../Images/Cad.png",
  },
  {
    title: "Cloud Application Development",
    img: "../Images/Cad.png",
  },
  {
    title: "Cloud Application Development",
    img: "../Images/Cad.png",
  },
  {
    title: "Cloud Application Development",
    img: "../Images/Cad.png",
  },
  {
    title: "Cloud Application Development",
    img: "../Images/Cad.png",
  },
];

function BrowseCategory(props) {
  return (
    <div className="">
      <div className="row d-flex justify-content-center pt-5 ">
        {value.map((item) => (
          <div className="col-sm-12 col-lg-4">
            <div className="shadow mt-4 ps-4 pt-5 pb-4 ">
              <div>
                <h3>{item.title}</h3>
              </div>
              <div className="d-flex justify-content-center">
                <div className="row">
                  <div className="col-6">
                    <div>
                      <NavLink className="see-all">See All</NavLink>
                    </div>
                    <div className="d-flex align-items-center">
                    <span className="dot"></span>
                      <hr style={{ border: "1px solid #f76a2a",width:"100%"}} />
                    </div>
                  </div>
                  <div className="col-6">
                    <img src={Cad} className="Img" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseCategory;
