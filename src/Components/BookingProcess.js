import React from 'react';
import ServiceIcon from "../Images/select-the-service-icon.svg";

function BookingProcess(props) {
    return (
        <div className='container'>
            <div className="shadow pt-5 pb-5">
                    <div className='text-center'>
                      <img src={ServiceIcon} alt="img" className="Img"/>
                    </div>
                    <div>
                        <h3 className='text-center pt-3 pb-4 '>Select the Service</h3>
                    </div>
                    <div>
                        <p className='text-center' style={{padding:"0px 30px"}}>
                            Pick the services you are looking for- from the website or app.
                        </p>
                    </div>
                  </div>
        </div>
    );
}

export default BookingProcess;