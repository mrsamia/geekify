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
        <div className='row pb-4'>
            {
                value.map((item) => (
                    <div className='col-sm-12 col-lg-4 shadow pt-3' style={{ padding: "0px 30px" }}>
                        <div className='pb-4 '>
                            <h3 className='text-center'>{item.title}</h3>
                        </div>
                        <div>
                            <img src={item.img} alt="img" className="Img d-flex justify-content-center" />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Card;