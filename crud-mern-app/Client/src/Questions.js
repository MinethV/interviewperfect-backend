import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import VantaGlobe from "vanta/src/vanta.globe";

function Questions() {
    useEffect(
        () => {
            VantaGlobe({
                el: "#bgGlobe",
                mouseControls: false,
                touchControls: false,
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
        id: 1,
        industry: "IT",
        type: "Multiple Choice",
        question: "What is the capital of India?",
        answer: "New Delhi"
    }]);
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center " id="bgGlobe">
            <div className="w-50 bg-white rounded p-3">
                <table className="table">
                    <Link to="/create" className='btn btn-success'>Add + </Link>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Industry</th>
                        <th>Type</th>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            questions.map((question) => {
                                return (
                                    <tr key={question.id}>
                                        <td>{question.id}</td>
                                        <td>{question.industry}</td>
                                        <td>{question.type}</td>
                                        <td>{question.question}</td>
                                        <td>{question.answer}</td>
                                        <td>
                                            <Link to="/update" className='btn btn-success'>Update </Link>
                                            <button>Delete</button>

                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Questions;