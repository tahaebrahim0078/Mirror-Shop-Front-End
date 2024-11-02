import React from 'react';
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instgarm_icon from '../assets/instagram_icon.png'
import pintrest_icon from '../assets/pintester_icon.png'
import wattsap_icon from '../assets/whatsapp_icon.png'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>MIRROR</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offieces</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-socila-icon">
                <div className="footer-icon-container">
                    <img src={instgarm_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pintrest_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={wattsap_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyRight">
                <hr />
                <p className='copyrgiht'>Copyright @ 2024 - ALL Right Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
