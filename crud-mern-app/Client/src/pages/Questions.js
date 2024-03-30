import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import VantaGlobe from "vanta/src/vanta.globe";
import axios from "axios";
import '../stylesheets/Questions.css';

function Questions() {

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteQuestion/${id}`)
            .then(res => { console.log(res); window.location.reload(); })
            .catch(err => console.log(err));
    }

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
        }, []
    );

    const [questions, setQuestions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get("https://localhost:3001/read")
            .then(result => setQuestions(result.data))
            .catch(err => console.log(err));
    }, []);

    const filteredQuestions = questions.filter(question => {
        const industry = question.industry ? question.industry.toLowerCase() : '';
        const type = question.type ? question.type.toLowerCase() : '';
        const questionText = question.question ? question.question.toLowerCase() : '';
        const answer = question.answer ? question.answer.toLowerCase() : '';

        return (
            industry.includes(searchQuery.toLowerCase()) ||
            type.includes(searchQuery.toLowerCase()) ||
            questionText.includes(searchQuery.toLowerCase()) ||
            answer.includes(searchQuery.toLowerCase())
        );
    });


    return (
        <div className="d-flex vh-100 justify-content-center align-items-center" id="bgGlobe">
            <div className="w-75 h-75 bg-white rounded p-3 ">
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form-control"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="res_table">
                    <table className="table">
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
                            filteredQuestions.map((question) => {
                                return (
                                    <tr key={question._id}>
                                        <td>{question.industry}</td>
                                        <td>{question.type}</td>
                                        <td>{question.question}</td>
                                        <td>{question.answer}</td>
                                        <td>
                                            <Link to={`/update/${question._id}`} className='btn btn-primary'>Update</Link>
                                            <button className="mt-2 pe-3 btn btn-danger" onClick={() => handleDelete(question._id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
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
