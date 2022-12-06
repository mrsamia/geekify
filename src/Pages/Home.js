import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import HeaderImg from "../Images/header-img.png";
import subscription from '../Images/subscription.png';
import "./pages.css";

function Home(props) {
  return (
    <div>
      <section className=" heroSection vh-100">
        <div className="container ">
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
                  Request a call back{" "}
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 d-flex ">
              <img src={HeaderImg} alt="img" className="headerImg" />
            </div>
          </div>
        </div>
      </section>
      <section className="memberShipSection">
       <div className="container vh-100">
       <div className="row ">
          <div className="col-sm-12 col-lg-6 membership-bg ">
                <h3 className="membershipTitle">Inroducing Our<br></br><span style={{color:"RGBA(247, 106, 42, 1)"}}>Greekify Membership</span> </h3>
                <p className="membershipText">With Geeks, your onsite computer tech specialist, we are offering you an exclusive
                subscription plan to cater to all your tech needs. This limited offer gives you
                1 FREE home visit EVERY MONTH!</p>
                <div>
                    <button className="BeAMemberBtn">Be a member</button>
                </div>
          </div>
          <div className="col-sm-12 col-lg-6">
          <img src={subscription} alt="img" className="headerImg" />
          </div>
        </div>
       </div>
      </section>
    </div>
  );
}

export default Home;
