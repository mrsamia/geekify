import React from "react";
import Blog1 from "../Images/blog-1.png";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

function Blog(props) {
  const value = [
    {
      title: "5 tips to improve your internet browsing skills ",
      type: " Internet",
      time: "20 min read ",
    },
    {
      title: "What is the best encryption for a wireless router?",
      type: " Internet",
      time: "20 min read ",
    },
    {
      title: "Windows 11 launches with surprisingly few gremlins ",
      type: " Internet",
      time: "20 min read ",
    },
    {
      title: "Microsoft increases Office 365 and Microsoft 365 pricing ",
      type: " Internet",
      time: "20 min read ",
    },
  ];
  const cardValue = [
    {
      title: "5 tips to improve your internet browsing skills ",
      type: " Internet",
      time: "20 min read ",
    },
    {
      title: "What to do when your hard drive fails ",
      type: " Internet",
      time: "20 min read ",
    },
    {
      title: "Has the time come to switch to SSD? ",
      type: " Internet",
      time: "20 min read ",
    },
  ];
  const mostPopular = [
    {
      title: "5 tips to improve your internet browsing skills ",
    },
    {
      title: "5 tips to improve your internet browsing skills ",
    },
    {
      title: "5 tips to improve your internet browsing skills ",
    },
    {
      title: "What to do when your hard drive fails ",
    },
    {
      title: "Has the time come to switch to SSD? ",
    },
  ];
  const buttonValue = [
    {
      name: "gadgets",
    },
    {
      name: "internet",
    },
    {
      name: "MacOS",
    },
    {
      name: "Security",
    },
    {
      name: "pC Help",
    },
    {
      name: "Microsoft",
    },
    {
      name: "windows",
    },
  ];

  return (
    <div>
      <section className="sectionPadding blog-bg blog-wrapper d-flex align-items-center">
        <div className="d-flex align-items-center">
          <div className="container">
            <div>
              <h2 className="heroText">Blog</h2>
              <p className="fs-2 text-white">Join 10,000+ Subscribers</p>
            </div>
            <div className="input-group">
              <input
                className="form-control blog-input-form Active"
                placeholder="Email Address"
              />
              <div className="input-group-append">
                <button type="button" className="btn Subscribe-Now-btn ">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div>
              <p className="text-white fs-5 pt-2">
                Get access to exclusive guides, tips, updates, ebooks, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionPadding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-6">
                  <h3>
                    Latest <span className="Active">Blog</span>
                  </h3>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <p className="text-end Active pe-3">view all</p>
                  <AiOutlineArrowRight className="Active mt-1" />
                </div>
              </div>
              <div className="row pt-5">
                {value.map((item) => (
                  <div className="col-sm-12 col-md-6  mb-5">
                    <div className="shadow">
                      <div>
                        <img src={Blog1} alt="img" className="img-fluid" />
                      </div>
                      <div className="btn-position">
                        <button className="btn search-icon fw-bold pe-3 ps-3 rounded-0">
                          DEC 30, 2021
                        </button>
                      </div>
                      <div className="pt-5 pb-5 ps-3">
                        <h5>{item.title}</h5>
                      </div>
                      <div className="row Active pb-3 ps-3">
                        <div className="col-6">
                          <p>{item.type}</p>
                        </div>
                        <div className="col-6 d-flex justify-content-end align-items-center">
                          <AiOutlineClockCircle className="mb-3" />
                          <p className="pe-3 ps-2">{item.time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="input-group">
                <input
                  className="form-control border-0 bg-light"
                  placeholder="Search..."
                />
                <div className="input-group-append">
                  <button type="button" className="search-icon ps-3 pe-3">
                    <BiSearch/>
                  </button>
                </div>
              </div>
              <div className="pt-5 pb-5">
                <div className=" ps-4 pe-3 pt-2 pb-2 search-icon">
                  <h3>Tags</h3>
                </div>
                <div className="pt-2 pb-5 ps-3 pe-3 bg-light">
                  {buttonValue.map((item) => (
                    <button className="border-0 bg-white ps-3 pe-3 pt-2 pb-2 m-2">
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pb-4">
                <h3>
                  Most <span className="Active">popular</span>
                </h3>
              </div>
              <div className="bg-light pt-5 pb-4">
                {mostPopular.map((item) => (
                  <div className="row pb-4 pe-2">
                    <div className="col-4 ps-4 pe-0 ">
                      <img src={Blog1} alt="img" className="Img" />
                    </div>
                    <div className="col-8">
                      <h6 className="pe-1">{item.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="row pt-2">
              {cardValue.map((item) => {
                return (
                  <div className="col-sm-12 col-lg-4 mt-2">
                    <div className="shadow">
                      <div>
                        <img src={Blog1} alt="img" className="Img" />
                      </div>
                      <div className="btn-position">
                        <button className="btn search-icon fw-bold pe-3 ps-3 rounded-0">
                          DEC 30, 2021
                        </button>
                      </div>
                      <div className="pt-5 pb-5 ps-3">
                        <h5>{item.title}</h5>
                      </div>
                      <div className="row Active ps-3">
                        <div className="col-6">
                          <p>{item.type}</p>
                        </div>
                        <div className="col-6 d-flex justify-content-end align-items-center">
                          <AiOutlineClockCircle className="mb-3" />
                          <p className="pe-3 ps-2">{item.time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="d-flex justify-content-center pt-5 pb-5">
            <button className="bookNowBtn"> View All <AiOutlineArrowRight className="text-white ms-3" /></button>
        
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
