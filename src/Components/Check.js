import React from 'react';
import Tick1 from "../Images/tick1.png";

function Check(props) {
    return (
        <div className="d-flex shadow align-items-center ">
            <img src={Tick1} alt="img" />
            <div>
                <p className="BackgroundCheck">Background Check</p>
            </div>
        </div>
    );
}

export default Check;