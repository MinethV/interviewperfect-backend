import React, { useEffect, useState } from 'react';
import VantaGlobe from "vanta/src/vanta.globe";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateQuestion() {
    const { id } = useParams();
    const [industry, setIndustry] = useState("");
    const [type, setType] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [industryError, setIndustryError] = useState(false);
    const [typeError, setTypeError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getQuestion/' + id)
            .then(result => {
                console.log(result)
                setIndustry(result.data.industry);
                setType(result.data.type);
                setQuestion(result.data.question);
                setAnswer(result.data.answer);
            })
            .catch(err => console.log(err))
    }, [id]);

    const Update = (e) => {
        e.preventDefault();
        if (industry !== "" && type !== "" && question !== "" && answer !== "") {
            axios.put("http://localhost:3001/updateQuestion/" + id, { industry, type, question, answer })
                .then(result => {
                    console.log(result)
                    navigate('/read')
                })
                .catch(err => console.log(err))
        } else {
            if (industry === "") {
                setIndustryError(true);
            }
            if (type === "") {
                setTypeError(true);
            }
        }
    }

    useEffect(() => {
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
    }, []);

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center" id="bgGlobe">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update Question</h2>
                    <div className="mb-2">
                        <label htmlFor="industry" className="form-label">Industry</label>
                        <select className="form-select" aria-label="Industry selection" value={industry}
                                onChange={(e) => { setIndustry(e.target.value); setIndustryError(false); }} required>
                            <option value="">Choose an industry</option>
                            <option value="Software Engineering">Software Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="HR">Human Resource</option>
                            <option value="UI & UX Engineering">UI & UX Engineering</option>
                        </select>
                        {industryError && <p className="text-danger">Please select an industry</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="type" className="form-label">Type</label>
                        <select className="form-select" aria-label="Type selection" value={type}
                                onChange={(e) => { setType(e.target.value); setTypeError(false); }} required>
                            <option value="">Choose a type</option>
                            <option value="Technical">Technical</option>
                            <option value="Situational">Situational</option>
                            <option value="Common">Common</option>
                        </select>
                        {typeError && <p className="text-danger">Please select a type</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="question" className="form-label">Question</label>
                        <input type="text" placeholder="Enter the Question" className="form-control" id="question" value={question}
                               onChange={(e) => setQuestion(e.target.value)} required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="answer" className="form-label">Answer</label>
                        <input type="text" placeholder="Enter the Answer" className="form-control" id="answer" value={answer}
                               onChange={(e) => setAnswer(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateQuestion;
