import React from 'react';
import DownloadIcon from "../Images/download-icon.png";

function Footer(props) {
    return (
        <div className='pt-5'>
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Company</th>
                        <th scope="col">Discover</th>
                        <th scope="col">Services</th>
                        <th scope="col">Download Our App</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>About Us</td>
                        <td>ThorntonHandle</td>
                        <td>Investor Relations</td>
                        <td>App is available for free on app store</td>
                    </tr>
                    <tr>
                        <td>Contact US</td>
                        <td>Board of Directors</td>
                        <td>Investor Relationsfat Handle</td>
                        <td><img src={DownloadIcon} alt="img" className="Img" /></td>
                    </tr>
                    <tr>
                        <td>Careers</td>
                        <td>twitter</td>
                        <td>Management Team</td>
                    </tr>
                    <tr>

                        <td>Management Team</td>
                        <td>Investor Relations</td>
                        <td>fat Handle</td>

                    </tr>
                    <tr>

                        <td>Board of Directors</td>
                        <td>Careers</td>
                        <td>fat Investor Relations</td>

                    </tr>
                    <tr>

                        <td>Investor Relations</td>
                        <td>Board of Directors</td>
                        <td>fat Handle</td>

                    </tr>
                    <tr>

                        <td>Blog</td>
                        <td>Careers</td>
                        <td>Investor Relations Handle</td>

                    </tr>
                    <tr>

                        <td>Contact US</td>
                        <td>ThorntonHandle</td>
                        <td>fat Handle</td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Footer;