import React from 'react';
import CallBackButton from "../Components/CallBackButton";

function FooterImg(props) {
    return (
        <div>
            <div className="FooteBg ">
            <div className="pt-4 pb-5">
              <div className="d-flex justify-content-center">
                <p className="footer-p">Can't find the service you need?</p>
              </div>
              <div className="d-flex justify-content-center">
                <h2 className="footer-h2">Our team will contact you in 24 hours.</h2>
              </div>
              <div className="d-flex justify-content-center">
                <CallBackButton className="RequestCallBackSm-btn" />
              </div>
            </div>
          </div>
        </div>
    );
}

export default FooterImg;