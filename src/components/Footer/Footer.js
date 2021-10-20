import React from 'react';
import './Footer.css'
import footer1 from '../../images/footer/footer.png'
import footer2 from '../../images/footer/footer1.png'

const Footer = () => {
    return (
        <div className="container">
            <div className="bg-dark d-flex justify-content-around p-2 text-primary">
                <div className="contact">
                    <h3>Splash SPA</h3>
                    <p>This site only for health Relate outlite side</p>
                    <p><small>Not allow to copy this site</small>

                    </p>

                </div>
                <div className="image">
                    <img src={footer1} alt="" />
                    <br />
                    <img src={footer2} alt="" />


                </div>
                <div className="contact">
                    <p>Contact us</p>
                    <p>Hot number: +00190250</p>
                    <p>Email:Splash@com.bg</p>

                </div>
            </div>



        </div>
    );
};

export default Footer;