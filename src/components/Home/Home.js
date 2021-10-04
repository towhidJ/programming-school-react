import React from "react";
import AboutMission from "../About/AboutMission";
import Banner from "../Banner/Banner";
import Community from "../Community/Community";
import Course from "../Course/Course";
import Team from "../Team/Team";
import useCourse from "./../../hooks/useCourse";

const Home = () => {
    const [courses] = useCourse();
    const size = 4;
    const items = courses.slice(0, size);
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
                <div className="row row-cols-md-3 row-cols-1 row-cols-lg-4 g-4">
                    {items.map((course) => (
                        <Course key={course.key} course={course}></Course>
                    ))}
                </div>

                <Community></Community>
            </div>
            <AboutMission />
            <Team></Team>
        </div>
    );
};

export default Home;
