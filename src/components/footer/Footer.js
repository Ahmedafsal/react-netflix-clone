import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-header">
                    <p>Questions? Call 000-800-040-1843</p>
                </div>
                <div className="sub-container">
                    <div className="links-container">
                        <p>FAQ</p>
                        <p>Investor Relations</p>
                        <p>Privacy</p>
                        <p>Speed Test</p>      
                    </div>
                    <div className="links-container">
                        <p>Help Centre</p>
                        <p>Jobs</p>
                        <p>Cookie Preferences</p>
                        <p>Legal Notices</p>  
                    </div>
                    <div className="links-container">
                        <p>Account</p>
                        <p>Ways to Watch</p>
                        <p>Corporate Information</p>
                        <p>Netflix Originals</p>
                    </div>
                    <div className="links-container">
                        <p>Media Center</p>
                        <p>Terms of Use</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className="footer-logo">
                    <p>Netflix clone</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
