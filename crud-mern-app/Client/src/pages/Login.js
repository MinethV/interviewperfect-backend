// import React, { useEffect, useState } from 'react';
// import VantaGlobe from "vanta/src/vanta.globe";
// import { useParams, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import '../stylesheets/Login.css';
//
//
// function UpdateQuestion() {
// const navigate = useNavigate();
//
//     useEffect(() => {
//         VantaGlobe({
//             el: "#bgGlobe",
//             mouseControls: true,
//             touchControls: true,
//             gyroControls: false,
//             minHeight: 100.00,
//             minWidth: 100.00,
//             scale: 1.00,
//             scaleMobile: 1.00,
//             color: 0xdc3fff,
//             color2: 0x3f3fff,
//             size: 1.10,
//             backgroundColor: 0xeaf9f9
//         });
//     }, []);
//
//
//
//     return (
//         <>
//             <div className="container-fluid login" id="bgGlobe">
//                 <div className="d-flex justify-content-center">
//
//                     {/*<div className="Login">*/}
//                     {/*    <div className="card logInCard">*/}
//                     {/*        <div className="container">*/}
//                     {/*            <h2 className="mb-4 mt-5 text-center">Login</h2>*/}
//                     {/*            <form>*/}
//                     {/*                <div className="mb-4">*/}
//                     {/*                    <input type="text" className="form-control" id="username" name="username"*/}
//                     {/*                           placeholder="Username"*/}
//                     {/*                           required/>*/}
//                     {/*                </div>*/}
//                     {/*                <div className="mb-3">*/}
//                     {/*                    <input type="password" className="form-control" id="password"*/}
//                     {/*                           placeholder="Password"*/}
//                     {/*                           name="password"*/}
//                     {/*                           required/>*/}
//                     {/*                </div>*/}
//                     {/*                <Link to="/signin" className="btn btn-link pb-4 text-decoration-none"> Forgot*/}
//                     {/*                    Password</Link>*/}
//                     {/*                <div className="text-center">*/}
//                     {/*                    <button type="submit" className="btn btn-primary w-100">Login*/}
//                     {/*                    </button>*/}
//
//                     {/*                </div>*/}
//                     {/*                <br/>*/}
//                     {/*                <br/>*/}
//                     {/*                <div className="d-flex align-items-center text-muted">*/}
//                     {/*                    <hr className="flex-grow-1"/>*/}
//                     {/*                    <span className="px-2">Don't have an Account?  </span>*/}
//                     {/*                    <hr className="flex-grow-1"/>*/}
//                     {/*                </div>*/}
//                     {/*                <div className="text-center mb-5">*/}
//                     {/*                    <i className="bi bi-person-circle"/>*/}
//                     {/*                    <Link to="/signin" className="btn btn-link text-decoration-none ">Create an*/}
//                     {/*                        Account</Link>*/}
//                     {/*                </div>*/}
//                     {/*            </form>*/}
//                     {/*        </div>*/}
//                     {/*    </div>*/}
//                     {/*</div>*/}
//                 </div>
//             </div>
//         </>
//     );
// }
//
// export default UpdateQuestion;
