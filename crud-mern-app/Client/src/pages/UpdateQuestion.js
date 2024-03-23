import React, {useEffect, useState} from 'react';
import VantaGlobe from "vanta/src/vanta.globe";
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";

function UpdateQuestion() {
    const {id} = useParams()
    const [industry, setIndustry] = useState();
    const [type, setType] = useState();
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3001/getQuestion/'+id)
            .then(result => {
                console.log(result)
                setIndustry(result.data.industry)
                setType(result.data.type)
                setQuestion(result.data.question)
                setAnswer(result.data.answer)
            })
            .catch(err => console.log(err))
    },[])

    const Update = (e) => {
        e.preventDefault();
        if (industry !== undefined && type !== undefined && question !== undefined && answer !== undefined && industry !== "" && type !== "" && question !== "" && answer !== "") {
            axios.put("http://localhost:3001/updateQuestion/"+id, {industry, type, question, answer})
                .then(result => {
                    console.log(result)
                    navigate('/read')
                })
                .catch(err => console.log(err))
        }
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
        },[]
    )
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center" id="bgGlobe">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update Question</h2>
                    <div className="mb-2">
                        <label htmlFor="industry" className="form-label">Industry</label>
                        <select className="form-select" aria-label="Industry selection" value={industry}
                                onChange={(e) => setIndustry(e.target.value)} required>
                            <option value="Software Engineering">Software Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="HR">Human Resource</option>
                            <option value="UI & UX Engineering">UI & UX Engineering</option>

                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="type" className="form-label">Type</label>
                        <select className="form-select" aria-label="Default select example" value={type}
                                onChange={(e) => setType(e.target.value)} required>
                            <option value="Technical">Technical</option>
                            <option value="Situational">Situational</option>
                            <option value="Common">Common</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="question" className="form-label">Question</label>
                        <input type="text" placeholder="Enter the Question" className="form-control" id="question" value={question}
                               onChange={(e) => setQuestion(e.target.value)} required/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="answer" className="form-label">Answer</label>
                        <input type="text" placeholder="Enter the Answer" className="form-control" id="answer" value={answer}
                               onChange={(e) => setAnswer(e.target.value)} required/>
                    </div>
                    <button type="submit" className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateQuestion;