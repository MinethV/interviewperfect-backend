import React, {useEffect,useState} from 'react';
import VantaGlobe from "vanta/src/vanta.globe";
import  axios from 'axios';
import {useNavigate} from "react-router-dom";

function CreateQuestion() {
    const [industry, setIndustry] = useState();
    const [type, setType] = useState();
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();

    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createQuestion", {industry, type, question,answer})
            .then(result => {
                console.log(result)
                navigate('/read')
            })
            .catch(err => console.log((err)))
    }

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
        },[]
    )
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center" id="bgGlobe">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Create User</h2>
                    <div className="mb-2">
                        <label htmlFor="industry" className="form-label">Industry</label>
                        <select className="form-select" aria-label="Industry selection"
                                onChange={(e) => setIndustry(e.target.value)} required>
                            <option selected>Choose the Type</option>
                            <option value="Software Engineering">Software Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Human Resource">Human Resource</option>
                            <option value="UI & UX Engineering">UI & UX Engineering</option>

                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="type" className="form-label">Type</label>
                        <select className="form-select" aria-label="Type selection"
                                onChange={(e) => setType(e.target.value)} required>
                        <option selected>Choose the Type</option>
                            <option value="Technical">Technical</option>
                            <option value="Situational">Situational</option>
                            <option value="Common">Common</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="question" className="form-label">Question</label>
                        <input type="text" placeholder="Enter the Question" className="form-control" id="question"
                               onChange={(e) => setQuestion(e.target.value)} required/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="answer" className="form-label">Answer</label>
                        <input type="text" placeholder="Enter the Answer" className="form-control" id="answer"
                               onChange={(e) => setAnswer(e.target.value)} required/>
                    </div>
                    <button type="submit" className="btn btn-success">Create</button>
                </form>
            </div>
        </div>
    );
}

export default CreateQuestion;