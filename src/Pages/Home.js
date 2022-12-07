import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import HeaderImg from "../Images/header-img.png";
import subscription from "../Images/subscription.png";
import AddBanner from "../Images/add-banner.png";
import MobileImg from "../Images/mobile-image.png";
import DownloadIcon from "../Images/download-icon.png";
import { AiOutlineMinus } from "react-icons/ai";
import Line from "../Images/line.png";
import "./pages.css";
import SectionTitle from "../Components/SectionTitle";

function Home(props) {
  return (
    <div>
      <section className=" heroSection">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-sm-12 col-lg-6">
              <div>
                <h1 className="heroText">You point it, We fix it</h1>
              </div>
              <div>
                <p className="txt-25 mt-4 mb-4">
                  One-stop solution for your services. Order any service,
                  anytime.
                </p>
              </div>
              <div className="bbtn">
                <button className="requestCallBack-btn">
                  <FiPhoneCall style={{ width: "46px" }} />
                  Request a call back
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 ">
              <img src={HeaderImg} alt="img" className="headerImg" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-5 d-flex justify-content-center">
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src={AddBanner}
            alt="img"
          />
        </div>
      </section>
      <section className="memberShipSection d-flex">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 membership-bg  ">
              <div>
                <div>
                  {/* <div className="row">
                    <div className="col-2">
                      <AiOutlineMinus className="AiOutlineMinus" />
                      <img src={Line} alt="img" className="line" />
                    </div>
                    <div className="col-10" style={{ paddingLeft: "0px" }}>
                      <h3 className="membershipTitle">
                        Inroducing Our<br></br>
                        <span style={{ color: "RGBA(247, 106, 42, 1)" }}>
                          Greekify Membership
                        </span>
                      </h3>
                    </div>
                  </div>  */}

                  {/* <div className="d-flex">
                  <img src={Line} alt="img" className="line" />
                  <h3 className="membershipTitle">
                        Inroducing Our<br></br>
                        <span style={{ color: "RGBA(247, 106, 42, 1)" }}>
                          Greekify Membership
                        </span>
                      </h3>
                  </div> */}
                  <SectionTitle name="Inroducing Our" />
                  <h3
                    className="membership_Indent_Title"
                    style={{ textIndent: "53px" }}
                  >
                    {" "}
                    Greekify Membership
                  </h3>
                </div>
                <div>
                  <p className="membershipText">
                    With Geeks, your onsite computer tech specialist, we are
                    offering you an exclusive subscription plan to cater to all
                    your tech needs. This limited offer gives you 1 FREE home
                    visit EVERY MONTH!
                  </p>
                </div>
                <div>
                  <button className="BeAMemberBtn">Be a member</button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <img src={subscription} alt="img" className="headerImg" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-sm-12 col-lg-6">
              <img src={MobileImg} alt="img" className="headerImg" />
            </div>
            <div className="col-sm-12 col-lg-6 left">
              <div className="d-flex">
                <img src={Line} alt="img" className="line" />
                <p
                  style={{ fontSize: "20px", color: "gray", fontWeight: "200" }}
                >
                  Download our App
                </p>
              </div>
              {/* <SectionTitle name="Download our App" style={{fontSize: "20px",color: "gray",fontWeight: "200"}}/> */}
              <h3 className="membershipTitle">
                App is available for free on app store
              </h3>
              <p className="membershipText">
                Find and book your appointment from anywhere with our geekify
                customer app.
              </p>
              <div>
                <img src={DownloadIcon} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SectionTitle name="Why choose us?" />
      </section>



      <section >
        <div className="d-flex align-items-center">
          <div>
            <img src={MobileImg} alt="img" className="headerImg" />
          </div>
          <div>
            <div>
            <div>
              <div className="d-flex">
                <img src={Line} alt="img" className="line" />
                <p
                  style={{ fontSize: "20px", color: "gray", fontWeight: "200" }}>
                  Download our App
                </p>
              </div>
              <h3 className="membershipTitle">
                App is available for free on app store
              </h3>
              <p className="membershipText">
                Find and book your appointment from anywhere with our geekify
                customer app.
              </p>
              <div>
                <img src={DownloadIcon} alt="img" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;
