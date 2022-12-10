import React, { useState } from 'react';
import WebApplicationDevelopment from "../Images/web-application-development-image.png";

function Card(props) {

    const value=[
        {
            title: "Web Application Development",
            img: require("../Images/web-application-development-image.png")
        },
        {
            title: "iOS smartphone Applications",
            img: require("../Images/ios-smartphone-applications-image.png")
        },
        {
            title: "Android smartphone Applications",
            img: require("../Images/ios.png")
        },
        {
            title: "Email Account Set up",
            img: require("../Images/email-account-setup-image.png")
        },
        {
            title: "iOS smartphone Applications",
            img: require("../Images/web-application-development-image.png")
        },
        {
            title: "Android smartphone Applications",
            img:require("../Images/ios-smartphone-applications-image.png")
        }
    ]

    return (
        <div className='row pb-4 d-flex justify-content-center'>
            {
                value.map((item) => (
                    <div className='col-sm-12 col-lg-3 shadow pt-3 mb-4' style={{ padding: "0px 30px",marginRight:"25px" }}>
                        <div className='pb-4 '>
                            <h3 className='text-center'>{item.title}</h3>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img src={item.img} alt="img" className="Img " />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Card;