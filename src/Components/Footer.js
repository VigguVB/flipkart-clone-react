import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div className="footer">
            <h1 id="copy">&copy; Vignesh Bhandarkar</h1>
            <ul className="list1">
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Flipkart Stories</li>
                <li>Press</li>
                <li>Flipkart Wholesale</li>
                <li>Corporate Information</li>
            </ul>

            <ul className="list1">
                <li>Payments</li>
                <li>Shipping</li>
                <li>Cancellation & Returns</li>
                <li>FAQ</li>
                <li>Report Infringement</li>
            </ul>

            <ul className="list1">
                <li>Return Policy</li>
                <li>Terms Of Use</li>
                <li>Security</li>
                <li>Privacy</li>
                <li>Sitemap</li>
                <li>EPR Compliance</li>
            </ul>

            <ul className="list1">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Youtube</li>
            </ul>
        </div>
    );
}

export default Footer;