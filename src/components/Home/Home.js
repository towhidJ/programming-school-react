import React from "react";
import Banner from "../Banner/Banner";
import Course from "../Course/Course";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container">
                <h3 className="text-center">Our Best Service</h3>
                <div className="row row-cols-3">
                    <Course></Course>
                    <Course></Course>
                    <Course></Course>
                </div>
            </div>
        </div>
    );
};

export default Home;
