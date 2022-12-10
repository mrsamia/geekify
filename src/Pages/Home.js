import React from "react";
import HeaderImg from "../Images/header-img.png";
import subscription from "../Images/subscription.png";
import AddBanner from "../Images/add-banner.png";
import MobileImg from "../Images/mobile-image.png";
import DownloadIcon from "../Images/download-icon.png";
import Line from "../Images/line.png";
import Image from "../Images/image.png";
import "./pages.css";
import SectionTitle from "../Components/SectionTitle";
import Check from "../Components/Check";
import CallBackButton from "../Components/CallBackButton";
import Card from "../Components/Card";
import BookingProcess from "../Components/BookingProcess";
import Footer from "../Components/Footer";
import FooterImg from "../Components/FooterImg";
import FooterCopyRight from "../Components/FooterCopyRight";

function Home(props) {
  return (
    <div>
      <section className="heroSection pt-5">
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
              <CallBackButton className="RequestCallBackLg-btn" />
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
            className="Img"
            src={AddBanner}
            alt="img"
          />
        </div>
      </section>
      <section className="sectionPadding d-flex">
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
                  <p className="p_Text">
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
              <img src={subscription} alt="img" className="Img" />
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
            <div className="col-sm-12 col-lg-6 ">
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
              <p className="p_Text">
                Find and book your appointment from anywhere with our geekify
                customer app.
              </p>
              <div>
                <img src={DownloadIcon} alt="img" className="Img" />
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="sectionPadding backImg">
        <div className="container" style={{ position: "relative" }}>
          <div style={{ textAlign: "right" }} >
            <img src={Image} alt="img" className="Img" />
          </div>
          <div className="row bg-white d-flex align-items-center position">
            <div className="col-sm-12" style={{ padding: "50px" }}>
              <div>
                <SectionTitle name="Why choose us?" />
                <p className="p_Text">Your satisfaction is our goal. If you’re not happy, we’ll work to make it right.</p>
              </div>
              <div>
                <div className="row ">
                  <div className="col-sm-12 col-lg-6 pb-3 pb-lg-0">
                    <Check />
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <Check />
                  </div>
                </div>
                <div>
                  <div className="row pt-3">
                    <div className="col-sm-12 col-lg-6 pb-3 pb-lg-0">
                      <Check />
                    </div>
                    <div className="col-sm-12 col-lg-6">
                      <Check />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionPadding">
        <div className="container">
          <FooterImg/>
          <Footer />
        </div>
      </section>

      <section >
        <FooterCopyRight/>
      </section>

    </div>
  );
}

export default Home;
