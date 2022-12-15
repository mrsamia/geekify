import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Profile from "../Images/profile.png";

function BecomeMember(props) {
  const Pastdata = [
    {
      id: "#GY-588YX5-A",
      date: "01 Nov 2022, 11:00 AM",
      status: "Closed",
      Total: "$110.80",
      Action: "action",
    },
    {
      id: "#GY-588YX5-A",
      date: "01 Nov 2022, 11:00 AM",
      status: "Closed",
      Total: "$110.80",
      Action: "action",
    },
    {
      id: "#GY-588YX5-A",
      date: "01 Nov 2022, 11:00 AM",
      status: "Closed",
      Total: "$110.80",
      Action: "action",
    },
  ];
  const Activedata = [
    {
      id: "#GY-588YX5-A",
      date: "02 Nov 2022, 12:00 AM",
      status: "Open",
      Total: "View Appointment",
      Action: "action",
    },
    {
      id: "#GY-588YX5-A",
      date: "02 Nov 2022, 12:00 AM",
      status: "Rescheduled",
      Total: "View Appointment",
      Action: "action",
    },
    {
      id: "#GY-588YX5-A",
      date: "02 Nov 2022, 12:00 AM",
      status: "Rescheduled",
      Total: "View Appointment",
      Action: "action",
    },
  ];
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState("bookingHistory");
  function clickHandler() {
    setValue(0);
  }
  function clickHandler2() {
    setValue(1);
  }
  function bookingHandler() {
    setHistory("bookingHistory");
  }
  function orderHandler() {
    setHistory("orderHistory");
  }

  return (
    <div>
      <section className="sectionPadding bg-light">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-sm-12 col-lg-2">
              <img src={Profile} alt="img" />
            </div>
            <div className="col-sm-12 col-lg-10">
              <div className="d-flex align-items-center">
                <h2 className="profile-name">John Doe</h2>
                <NavLink className="text-black">(View additional info)</NavLink>
              </div>

              <div className="row border-bottom ">
                <div className="col-sm-12  col-lg-5">
                  <p>15 Railway Parade, Wollongong-2500</p>
                </div>
                <div className="col-sm-12  col-lg-4">
                  <p>
                    <span className="fw-bold">Email: </span>johndoe@example.com
                  </p>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <p>
                    <span className="fw-bold ">Mobile:</span> 0456987125
                  </p>
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-sm-12 col-lg-5">
                  <p>
                    <span className="fw-bold">Loyalty points:</span> 0 (Starter)
                  </p>
                </div>
                <div className="col-sm-12 col-lg-4">
                  <p>
                    <span className="fw-bold">Geekify Credit: </span>$15.80
                  </p>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <p>
                    <span className="fw-bold">Member since: </span>30 October
                    2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="d-flex justify-content-center">
            <button className={history==="bookingHistory"?"booking-history ActiveColor":"order-history "} onClick={bookingHandler}>
              Booking history
            </button>
            <button className={history==="orderHistory"?"order-history ActiveColor ":"booking-history"} onClick={orderHandler}>
              Order History
            </button>
          </div>
        </div>
      </section>

      <div>
        {history==="bookingHistory" ? (
          <div>
            <section>
              <div className="container  pt-4">
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
              </div>
            </section>

            <section className="pt-5">
              <div className="container bg-light">
                <div className="row pt-3 border-bottom border-white border-2">
                  <div
                    className={
                      value === 0
                        ? "col-4 d-flex align-items-center justify-content-center border-bottom-color"
                        : "col-4 d-flex align-items-center justify-content-center"
                    }
                  >
                    <h6
                      onClick={clickHandler}
                      className={value === 0 ? "Active" : ""}
                    >
                      Active
                    </h6>
                  </div>
                  <div
                    className={
                      value === 1
                        ? "col-4 d-flex align-items-center justify-content-center border-bottom-color"
                        : "col-4 d-flex align-items-center justify-content-center"
                    }
                  >
                    <h6
                      onClick={clickHandler2}
                      className={value === 1 ? "Active" : ""}
                    >
                      Past
                    </h6>
                  </div>
                  <div className="col-4 d-flex justify-content-end">
                    <button className="book-technicitan-btn">
                      book a technician
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="">
              {value === 0 ? (
                <div className="container bg-light pb-4">
                  <table class="table table-striped table-hover table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Appointment ID</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Pastdata.map((item) => (
                        <tr
                          className="mb-2"
                          style={{ backgroundColor: "white" }}
                        >
                          <td>{item.id}</td>
                          <td>{item.date}</td>
                          <td>{item.status}</td>
                          <td>{item.Total}</td>
                          <td>{item.Action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                ""
              )}
            </section>
            <section className="">
              {value === 1 ? (
                <div className="container bg-light pb-4">
                  <table class="table table-striped table-hover table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Appointment ID</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Activedata.map((item) => (
                        <tr
                          className="mb-2"
                          style={{ backgroundColor: "white" }}
                        >
                          <td>{item.id}</td>
                          <td>{item.date}</td>
                          <td>{item.status}</td>
                          <td>{item.Total}</td>
                          <td>{item.Action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                ""
              )}
            </section>
          </div>
        ) : (
          ""
        )}
      </div>

      <div>
        {history==="orderHistory"? (
          <div>
            <section>
              <div className="container  pt-4">
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
              </div>
            </section>

            <section className="pt-5">
              <h6 className="text-center">Order History</h6>
              <div className="container bg-light">
                <div className="row pt-3 border-bottom border-white border-2">
                  <div
                    className={
                      value === 0
                        ? "col-4 d-flex align-items-center justify-content-center border-bottom-color"
                        : "col-4 d-flex align-items-center justify-content-center"
                    }
                  >
                    <h6
                      onClick={clickHandler}
                      className={value === 0 ? "Active" : ""}
                    >
                      Active
                    </h6>
                  </div>
                  <div
                    className={
                      value === 1
                        ? "col-4 d-flex align-items-center justify-content-center border-bottom-color"
                        : "col-4 d-flex align-items-center justify-content-center"
                    }
                  >
                    <h6
                      onClick={clickHandler2}
                      className={value === 1 ? "Active" : ""}
                    >
                      Past
                    </h6>
                  </div>
                  <div className="col-4 d-flex justify-content-end">
                    <button className="book-technicitan-btn">
                      book a technician
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="">
              {value === 0 ? (
                <div className="container bg-light pb-4">
                  <table class="table table-striped table-hover table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Appointment ID</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Pastdata.map((item) => (
                        <tr
                          className="mb-2"
                          style={{ backgroundColor: "white" }}
                        >
                          <td>{item.id}</td>
                          <td>{item.date}</td>
                          <td>{item.status}</td>
                          <td>{item.Total}</td>
                          <td>{item.Action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                ""
              )}
            </section>
            <section className="">
              {value === 1 ? (
                <div className="container bg-light pb-4">
                  <table class="table table-striped table-hover table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Appointment ID</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Activedata.map((item) => (
                        <tr
                          className="mb-2"
                          style={{ backgroundColor: "white" }}
                        >
                          <td>{item.id}</td>
                          <td>{item.date}</td>
                          <td>{item.status}</td>
                          <td>{item.Total}</td>
                          <td>{item.Action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                ""
              )}
            </section>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BecomeMember;
