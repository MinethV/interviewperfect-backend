import React from 'react';
import '../stylesheets/Profile.css';
import {useAuth0} from "@auth0/auth0-react";
import {LogoutButton} from "../components/LogoutButton";

export const Profile = () => {
    const {user,isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <div className="profile">

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