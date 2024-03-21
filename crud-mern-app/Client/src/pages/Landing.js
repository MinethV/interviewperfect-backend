import React from 'react'
import LandingImg from '../images/crudapp.png';
import '../stylesheets/Landing.css';
import backgroundImage from "../images/background.png";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-gray-100 min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
                <div className="row g-0 align-items-center landing-row">
                    <div className="col-md-8 imageCol">
                        <img src={LandingImg} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-8 textCol">
                        <div className="card p-4 box">
                            <p className="lh-1 heading">Database<br/> Management<br/> System</p>
                            <p className="fs-5 fw-light">You can Create,Update,Search and <br/>
                                Delete questions in this application<br/>
                            </p>
                            <button type="button" className="btn btn-primary" onClick={() => navigate('/read')}>Visit the DBMS</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}