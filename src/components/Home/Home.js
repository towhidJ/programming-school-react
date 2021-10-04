import React from "react";
import AboutMission from "../About/AboutMission";
import Banner from "../Banner/Banner";
import Community from "../Community/Community";
import Course from "../Course/Course";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container">
                <div className="text-center mt-3 fw-bold">
                    <h3 style={{ color: "forestgreen", fontSize: "40px" }}>
                        Popular Course
                    </h3>
                    <p>50+ million people are already learning on Coursera.</p>
                </div>
                <div className="row row-cols-4">
                    <Course></Course>
                    <Course></Course>
                    <Course></Course>
                    <Course></Course>
                </div>

                <Community></Community>
            </div>
            <AboutMission />
            <Team></Team>
        </div>
    );
};

export default Home;
