import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import VantaGlobe from "vanta/src/vanta.globe";
import axios from "axios";
import './stylesheets/Questions.css';

function Questions() {
    useEffect(
        () => {
            VantaGlobe({
                el: "#bgGlobe",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 100.00,
                minWidth: 100.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xdc3fff,
                color2: 0x3f3fff,
                size: 1.10,
                backgroundColor: 0xeaf9f9
            });
        },[]
    )
    const [questions, setQuestion] = useState([{
        industry: "",
        type: " ",
        question: "",
        answer: ""
    }]);

    useEffect(()=>{
    axios.get("http://localhost:3001/read")
        .then(result => setQuestion(result.data))
        .catch(err => console.log(err))
    },[])

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center" id="bgGlobe">
            <div className="w-50 bg-white rounded p-3">
                <div className="res_table">
                    <table className="table">
                        <Link to="/create" className='btn btn-success'>Add</Link>
                        <thead>
                        <tr>
                            <th>Industry</th>
                            <th>Type</th>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            questions.map((question) => {
                                return (
                                    <tr>
                                        <td>{question.industry}</td>
                                        <td>{question.type}</td>
                                        <td>{question.question}</td>
                                        <td>{question.answer}</td>
                                        <td>
                                            <Link to={`/update/${question._id}`} className='btn btn-primary'>Update</Link>
                                            <button className="mt-2 pe-3 btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default Questions;