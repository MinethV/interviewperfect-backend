import React, {useEffect} from 'react';
import VantaGlobe from "vanta/src/vanta.globe";

function UpdateQuestion() {
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
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center" id="bgGlobe">
            <div className="w-50 bg-white rounded p-3">
                <form>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="industry" className="form-label">Industry</label>
                        <input type="text" placeholder="Enter Industry" className="form-control" id="industry"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="type" className="form-label">Type</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Choose the Type</option>
                            <option value="1">Technical</option>
                            <option value="2">Situational</option>
                            <option value="3">Common</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="question" className="form-label">Question</label>
                        <input type="text" placeholder="Enter the Question" className="form-control" id="question"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="answer" className="form-label">Answer</label>
                        <input type="text" placeholder="Enter the Answer" className="form-control" id="answer"/>
                    </div>
                    <button type="submit" className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateQuestion;