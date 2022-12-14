import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import Profile from "../Images/profile.png";

function BecomeMember(props) {
  return (
    <div>
      <section className="sectionPadding bg-light">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-sm-12 col-lg-2">
              <img src={Profile} alt="img" />
            </div>
            <div className="col-sm-12 col-lg-9">
              <div className="d-flex align-items-center">
                <h2 className="profile-name">John Doe</h2>
                <NavLink className="text-black">(View additional info)</NavLink>
              </div>
              <div className="d-flex justify-content-between pt-3 border-bottom">
                <p>15 Railway Parade, Wollongong-2500</p>
                <p>
                  <span className="fw-bold">Email: </span>johndoe@example.com
                </p>
                <p>
                  <span className="fw-bold">Mobile:</span> 0456987125
                </p>
              </div>
              <div className="d-flex justify-content-between pt-3">
                <p>
                  <span className="fw-bold">Loyalty points:</span> 0 (Starter)
                </p>
                <p>
                  <span className="fw-bold">Geekify Credit: </span>$15.80
                </p>
                <p>
                  <span className="fw-bold">Member since: </span>30 October 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="d-flex justify-content-center">
            <button className="booking-history">Booking history</button>
            <button className="order-history">Order History</button>
          </div>
         
        </div>
      </section>
      <section>
        <div className="container  pt-5 pb-5">
        <div className="pb-4 d-flex justify-content-center pt-4">
            <div
              className="form-group has-search input-group"
              style={{ maxWidth: "100%" }}
            >
              <input
                type="text"
                class="form-control"
                placeholder="Find your service here"
              ></input>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center bg-light border-bottom border-white border-2">
            <h6 className="ps-5">Active</h6>
            <h6 className="ps-5">Past</h6>
            <button className="bookNowBtn">book a technician</button>
          </div>
         <div className="bg-light">
         <div  className="d-flex justify-content-between align-items-center pt-5 pb-3">
            <h6 className="ps-5">Appointment ID</h6>
            <h6 className="ps-5">Date & Time</h6>
            <h6 className="ps-5">Status</h6>
            <h6 className="ps-5">Total </h6>
            <h6 className="pe-5">Action</h6>
          </div>
      
         <div  className="d-flex justify-content-between align-items-center pt-3 bg-white" >
                <p className="ps-5">#GY-588YX5-A</p>
                <p className="ps-5">01 Nov 2022, 11:00 AM</p>
                <p className="ps-5">Closed</p>
                <p className="ps-5">$110.80</p>
                <p className="pe-5">action</p>
          </div>
         
          <div  className="d-flex justify-content-between align-items-center pt-3 bg-white">
                <p className="ps-5">#GY-588YX5-A</p>
                <p className="ps-5">01 Nov 2022, 11:00 AM</p>
                <p className="ps-5">Closed</p>
                <p className="ps-5">$110.80</p>
                <p className="pe-5">action</p>
          </div>
         </div>
        </div>
      </section>
    </div>
  );
}

export default BecomeMember;
