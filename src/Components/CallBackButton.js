import React from 'react';
import { FiPhoneCall } from "react-icons/fi";

function CallBackButton(props) {
    return (
        
            <div className="bbtn">
                <button className={props.className}>
                  <FiPhoneCall style={{ width: "46px" }} />
                  Request a call back
                </button>
              </div>
       
    );
}

export default CallBackButton;