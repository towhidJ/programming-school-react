import React from "react";
import "./About.css";
import AboutMission from "./AboutMission";

const About = () => {
    return (
        <div className="mt-5">
            <AboutMission></AboutMission>
            <div className="text-center mt-2 container ">
                <div className="fw-bold">
                    <p style={{ color: "blue" }}>Why Choose Us</p>
                    <h1 style={{ color: "darkblue" }}>
                        Why People Choose ShopByte For Programming Language
                        Services
                    </h1>
                </div>
                <p>
                    Our purpose is to deliver excellence in service and
                    execution Our purpose is to deliver excellence in service
                    and Our purpose is to deliver excellence.
                </p>
                <div className="d-flex justify-content-between">
                    <div className="about-card card w-50 me-2">
                        <div className="card-body">
                            <h5 className="card-title">Easy Model Building</h5>
                            <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                        </div>
                    </div>
                    <div className="about-card card w-50 me-2">
                        <div className="card-body">
                            <h5 className="card-title">
                                Robust ML Production Anywhere
                            </h5>
                            <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                        </div>
                    </div>
                    <div className=" about-card card w-50">
                        <div className="card-body">
                            <h5 className="card-title">
                                Powerful Experimentation
                            </h5>
                            <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
