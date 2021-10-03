import React from "react";
import model from "../../asset/images/model.png";
import "./Banner.css";

const Banner = () => {
    return (
        <>
            <section className="container-fluid mt-5  p-md-5 banner-bg-info">
                <div className="d-md-flex align-items-center justify-content-between">
                    <div className="text-white text-justify ">
                        <p className="pt-3 pt-lg-0">
                            Computer-controlled digital transistorized with
                            electronic advance
                        </p>
                        <h1 className="font-weight-bold display-4">
                            Online Courses From The World’s Top Publishers
                        </h1>
                        <p>online Courses From The World’s Top Publishers</p>
                        <button className="btn banner-btn-bg py-2 px-4">
                            Buy Course
                        </button>
                    </div>
                    <div className="px-2 w-100">
                        <img className="img-fluid" src={model} alt="header" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
