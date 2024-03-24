import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/background.png";
import LandingImg from '../images/crudapp.png';
import { useAuth0 } from "@auth0/auth0-react";

export const Landing = () => {
    const navigate = useNavigate();
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    const handleVisitDBMS = () => {
        if (!isAuthenticated) {
            loginWithRedirect();
        } else {
            navigate('/read');
        }
    };

    return (
        <div className="container-fluid min-vh-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="row align-items-center">
                <div className="col-md-6 d-flex align-items-center ms-auto">
                    <img src={LandingImg} className="img-fluid ms-5" alt="CRUD App" style={{ width: '70%', height: 'auto', marginTop: '15vh' }} />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center me-auto me-md-0 mt-5 pt-3">
                    <div className="p-4 box rounded-5 col-lg-5 col-md-6 offset-md-3 col-sm-12 h-500 d-flex flex-column justify-content-center align-items-center" style={{ height: '500px', width: '500px', background: 'rgba(255,255,255,0.5)', WebkitBackdropFilter: 'blur(10px)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '45px', marginRight: '250px' }}>
                        <h1 className="lh-1 heading text-center" style={{ color: '#434445', fontWeight: 'bold' }}>Database<br />
                            Management<br />
                            System</h1><br /><br />
                        <p className="fs-5 fw-light text-center" style={{ color: '#616364', fontWeight: 'bold' }}>You can Create, Update, Search and <br />
                            Delete questions in this application<br />
                        </p><br /><br />
                        <button className="btn btn-primary" style={{ backgroundColor: '#3288FF', borderRadius: '5rem', padding: '10px 30px', fontSize: '1.5rem' }} onClick={handleVisitDBMS}>Visit the DBMS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
