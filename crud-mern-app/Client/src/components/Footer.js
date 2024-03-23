import React from "react";
import '../stylesheets/Footer.css'
import logo from '../images/logo.png';


const Footer = () => {
    return (
        <footer className="footer bg-white text-dark mt-5 footer-container" style={{backgroundColor: "white"}}>
            <div className="container">
                <div className='footer-top'>
                    <div className="footer-top-left">
                        <img src={logo} alt="" height="45"
                             className="d-inline-block align-text-top"/> <br/><br/>
                        <p className="text-muted">Your one stop solution to all your interview needs</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <hr className="bg-dark mb-4"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="font-weight-light mb-1" style={{color: "#B385FFF2"}}>COMPANY</h4>
                        <ul className="list-group footer-nav" style={{border: "none"}}>
                            <li className="list-group-item text-muted" style={{border: "none"}}>
                                <a href="" style={{color: "inherit", textDecoration: "none"}}>About
                                    Us</a>
                            </li>
                            <li className="list-group-item text-muted" style={{border: "none"}}>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="font-weight-light mb-1" style={{color: "#B385FFF2"}}>USEFUL LINKS</h4>
                        <ul className="list-group footer-nav" style={{border: "none"}}>
                            <li className="list-group-item text-muted" style={{border: "none"}}>Terms of use</li>
                            <li className="list-group-item text-muted" style={{border: "none"}}>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="font-weight-light mb-1" style={{color: "#B385FFF2"}}>COMMUNITY</h4>
                        <ul className="list-group footer-nav" style={{border: "none"}}>
                            <li className="list-group-item text-muted" style={{border: "none"}}>Social Media</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <hr className="bg-dark mb-1"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-left">
                        <p className="text-muted" style={{fontSize: "16px"}}><i>&copy; 2024 Interview Perfect</i></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;