import React from "react";
import logo from '../images/logo.png';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { LogoutButton } from "./LogoutButton";
import { LoginButton } from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg fixed-top navbar-light mask-custom shadow-0 ps-5">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" height="26"
                                 className="d-inline-block align-text-top" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav ms-auto">
                                {!isAuthenticated && <LoginButton />}
                                {isAuthenticated && <LogoutButton />}
                                {isAuthenticated && <Link to="/create" className='ms-2 btn btn-primary'>Add Questions</Link>}
                                {isAuthenticated && <CustomLink className="ms-2 btn btn-primary" to="/profile">Profile</CustomLink>}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }
}
