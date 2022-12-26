import React from 'react';
import { NavLink } from 'react-router-dom';
import DownloadIcon from "../Images/download-icon.png";


const CompanyItems = [
    {
        name: 'About Us'
    }, {
        name: 'Contact Us'
    }, {
        name: 'Careers'
    }, {
        name: 'Become A Tech',
    }, {
        name: 'Terms & Conditions',
    }, {
        name: 'Privacy Policy',
    }
]

const Discover = [
    {
        name: 'Franchise'
    }, {
        name: 'Blogs'
    }, {
        name: 'Careers'
    }, {
        name: 'Customer Review',
    }, {
        name: 'FAQs',
    }
]
const ServiceItems = [
    {
        name: 'Services'
    }, {
        name: 'Tech Support'
    }, {
        name: 'Remote Service'
    }
]
function Footer(props) {

    return (
        <div className='row '>
            <div className='col-md-6 col-sm-12 col-lg-3'>
                <div>
                    <h2 className='footer-header'>Company</h2>
                </div>
                <div>
                    {CompanyItems.map((items) => (
                        <div><NavLink className='footer-items'>{items.name}</NavLink></div>
                    ))}
                </div>
            </div>
            <div className='col-md-6 col-sm-12 col-lg-3'>
                <div>
                    <h2 className='footer-header'>Discover</h2>
                </div>
                <div>
                    {Discover.map((items) => (
                        <div><NavLink className='footer-items'>{items.name}</NavLink></div>
                    ))}
                </div>
            </div>
            <div className='col-md-6 col-sm-12 col-lg-3' >
                <div>
                    <h2 className='footer-header'>Service</h2>
                </div>
                <div style={{maxWidth:"250px"}}>
                    <p>Geeks CRS - the computer and tech service provider who says, "you point it, we fix it".</p>
                </div>
                <div>
                    {ServiceItems.map((items) => (
                        <div><NavLink className='footer-items'>{items.name}</NavLink></div>
                    ))}
                </div>
            </div>
            <div className='col-md-6 col-sm-12 col-lg-3'>
               <div>
               <div>
                    <h2 className='footer-header'>Download our App</h2>
                </div>
                <div>
                    <p>App is available for free on app store</p>
                </div>
                <div>
                <img src={DownloadIcon} alt="img" className="Img" />
                </div>
               </div>
            </div>
        </div>
    );
}

export default Footer;