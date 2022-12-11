import React from 'react';
import BookingProcess from '../Components/BookingProcess';
import SearchIcon from "../Images/search_outlined.png";
import Card from '../Components/Card';
import { HiSearch } from "react-icons/hi";
import S from "../Images/S.png";
import Footer from '../Components/Footer';
import FooterCopyRight from '../Components/FooterCopyRight';
import FooterImg from '../Components/FooterImg';
import SearchBar from '../Components/SearchBar';

function Service(props) {
    return (
        <div className='pt-5'>

            <section className="sectionPadding">
                <div>
                    <h1 className='text-center'>Cloud Application<br></br> Development Services</h1>
                </div>
                <div>
                    <p className='text-center pt-3 pb-3'>Find the type of service you need, clearly defined and ready to start. Work begins as soon as<br></br> you book and provide requirements.</p>
                </div>
                <div className='d-flex justify-content-center' >
                   <SearchBar/>
                </div>
            </section>

            <section className="sectionPadding" style={{ background: "#F2F5F6" }}>
                <div className="container">
                    <Card />
                </div>
            </section>
            <section className="sectionPadding">
                <div className="container">
                    <h2 className="text-center">Simple booking process</h2>
                    <p className="text-center">Easiest way to get a service</p>
                    <div className="bookingProcessBg pt-5 pb-5 ">
                        <div className="row ">
                            <div className="col-sm-12 col-lg-4 pb-3 service-mt">
                                <BookingProcess />
                            </div>
                            <div className="col-sm-12 col-lg-4 pb-3">
                                <BookingProcess />
                            </div>
                            <div className="col-sm-12 col-lg-4 pb-3 service-mt">
                                <BookingProcess />
                            </div>
                        </div>
                        <div className="pt-5 d-flex justify-content-center">
                            <button className="bookNowBtn">Book Now</button>
                        </div>

                    </div>
                </div>
            </section>

            <section className="sectionPadding">
                <div className="container">
                    <FooterImg />
                    <Footer />
                </div>
            </section>

            <section >
                <FooterCopyRight />
            </section>
        </div>
    );
}

export default Service;