import React from "react";
import aboutImg from "../../asset/images/about.png";
const AboutMission = () => {
    return (
        <div>
            <section
                style={{ backgroundColor: "aliceblue" }}
                className="container-fluid mt-5  p-md-5 "
            >
                <div className="d-md-flex align-items-center justify-content-between">
                    <div className="px-2 w-100">
                        <img
                            className="img-fluid"
                            src={aboutImg}
                            alt="header"
                        />
                    </div>
                    <div className="text-justify text-dark ">
                        <p className="pt-3 pt-lg-0 fw-bold">About Us</p>
                        <h1 className="font-weight-bold display-4 fw-bold">
                            Mission Is To Bring The Power Of Ml To Every
                            Business
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                        <button className="btn banner-btn-bg py-2 px-4 text-uppercase">
                            Join Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMission;
