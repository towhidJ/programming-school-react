import React from "react";
import "./Community.css";
const Community = () => {
    return (
        <div className="text-center fw-bold community">
            <h3 style={{ color: "forestgreen", fontSize: "40px" }}>
                Our Global Community
            </h3>
            <p>Join thousand of instructors and earn money hassle free!</p>
            <div className="d-flex justify-content-between align-items-center px-5">
                <div className="row row-cols-2 align-items-center">
                    <div className="col">
                        <h1>
                            <i
                                className="fas fa-book-reader"
                                style={{ color: "tomato" }}
                            ></i>
                        </h1>
                    </div>
                    <div className="col">
                        <h1>5</h1>
                        <h5>Milion Learner</h5>
                    </div>
                </div>
                <div className="row row-cols-2 align-items-center">
                    <div className="col">
                        <h1>
                            <i
                                className="fas fa-user-graduate"
                                style={{ color: "darkcyan" }}
                            ></i>
                        </h1>
                    </div>
                    <div className="col">
                        <h1>2.5</h1>
                        <h5>Million Graduates</h5>
                    </div>
                </div>
                <div className="row row-cols-2 align-items-center">
                    <div className="col">
                        <h1>
                            <i
                                className="fas fa-user-graduate"
                                style={{ color: "black" }}
                            ></i>
                        </h1>
                    </div>
                    <div className="col">
                        <h1>1395</h1>
                        <p>Online Course</p>
                    </div>
                </div>
                <div className="row row-cols-2 align-items-center">
                    <div className="col">
                        <h1>
                            <i
                                className="fas fa-school"
                                style={{ color: "green" }}
                            ></i>
                        </h1>
                    </div>
                    <div className="col">
                        <h1>127</h1>
                        <p>Countries</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
