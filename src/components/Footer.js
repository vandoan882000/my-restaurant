import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div className="footer">
            <div className="footer-infor">
                <div className="footer-contact">
                    <span className="footer-contact-title">Contact Us <br/></span>
                    <span className="footer-contact-phone">123-456-7890 <br/>info@mysite.com</span>
                </div>
                <div className="footer-contact">
                    <span className="footer-contact-title">Address <br/></span>
                    <span  className="footer-contact-phone">500 Terry Francois Street <br/>San Francisco, CA 94158</span>
                </div>
                <div className="footer-contact">
                    <span className="footer-contact-title">Address <br/></span>
                    <span  className="footer-contact-phone">Mon - Fri: 8am - 8pm <br/>Saturday: 9am - 7pm <br/>Sunday: 9am - 8pm</span>
                </div>
            </div>
            
            <div className="footer-sub">
                <span>Subscribe now  *</span>
                <div className="tooltip">
                    <input type="email" placeholder="Enter your email" title="Vui lòng điền vào trường này"></input>
                    <button type="submit" className="btn-join">Join</button>
                </div>
                
            </div>
            <span>©2023 by Van Doan</span>
        </div>
    )
}

export default Footer
