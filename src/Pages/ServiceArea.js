import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
import FooterCopyRight from "../Components/FooterCopyRight";
import FooterImg from "../Components/FooterImg";
import SouthAustralia from "../Images/south-australia.png";

function ServiceArea(props) {
  const value = [
    {
      title: "South Australia",
      content: "All suburbs in Metropolitan Adelaide.",
      img: require("../Images/south-australia.png"),
    },
    {
      title: "Australian Capital Territory",
      content: "All suburbs in Metropolitan Adelaide.",
      img: require("../Images/south-australia.png"),
    },
    {
      title: "Queensland",
      content: "All suburbs in Metropolitan Adelaide.",
      img: require("../Images/south-australia.png"),
    },
    {
      title: "New South Wales",
      content:
        "Greater Western Sydney, Inner South, Northern Beaches, St. George, The Hills District, Eastern Suburbs, Inner West, Ryde & Northern Suburbs, Sutherland Shire.",
      img: require("../Images/south-australia.png"),
    },
    {
      title: "Victoria",
      content: "All suburbs in Metropolitan Adelaide.",
      img: require("../Images/south-australia.png"),
    },
    {
      title: "Western Australia",
      content: "All suburbs in Metropolitan Adelaide.",
      img: require("../Images/south-australia.png"),
    },
  ];

  return (
    <div className="pt-5">
      <section className="sectionPadding Service-area-bg">
        <div>
          <h1 className="text-center" style={{ color: "#f76a2a" }}>
            Our Service Areas
          </h1>
        </div>
        <div className="container pt-5">
          <div className="row">
            {value.map((item) => (
              <div className="col-sm-12 col-md-6 col-lg-4 pb-5">
                <div>
                  <img src={SouthAustralia} alt="img" className="Img" />
                </div>

                <div className="border-color px-3 mt-3">
                  <div className="border-bottom">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="pt-3">
                    <p>{item.content}</p>
                    <NavLink className="see-all">See all</NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionPadding">
                <div className="container">
                    <FooterImg />
                    <Footer />
                </div>
            </section>

            <section >
                <FooterCopyRight />
            </section>
    </div>
  );
}

export default ServiceArea;
