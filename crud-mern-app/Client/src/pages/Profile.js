import React, {useEffect} from 'react';
import '../stylesheets/Profile.css';
import {useAuth0} from "@auth0/auth0-react";
import {LogoutButton} from "../components/LogoutButton";
import VantaGlobe from "vanta/src/vanta.globe";


export const Profile = () => {
    const {user,isAuthenticated} = useAuth0();

    useEffect(
        () => {
            VantaGlobe({
                el: "#bgGlobe",
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                minHeight: 100.00,
                minWidth: 100.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xdc3fff,
                color2: 0x3f3fff,
                size: 1.10,
                backgroundColor: 0xeaf9f9
            });
        }, []
    )

    return (
        isAuthenticated && (
            <div className="profile" id="bgGlobe">

                <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                    <div className="card p-4 w-auto">
                        <div className=" image d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-secondary">
                                {user.picture && <img src={user.picture} height="100" width="100" alt="profileIcon"/>}
                                {/*<img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" alt="profileIcon"/>*/}
                            </button>
                            <span className="name mt-3"><h5>{user.name}</h5></span>

                            <div className=" d-flex mt-2">
                                <LogoutButton/>
                            </div>
                            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                                <span><i className="fa fa-twitter"></i></span> <span><i
                                className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span>
                                <span><i className="fa fa-linkedin"></i></span></div>

                        </div>
                    </div>
                </div>
            </div>
        )
    )
}