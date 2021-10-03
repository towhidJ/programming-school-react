import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="container-fluid bg-dark p-5 mt-5">
                <div className="container d-md-flex justify-content-between">
                    <div>
                        <div className="my-2">
                            <a
                                className="text-decoration-none text-white me-2"
                                href="#"
                            >
                                Download
                            </a>
                            <a
                                className="text-decoration-none text-white me-2"
                                href="#"
                            >
                                Licence
                            </a>
                        </div>
                        <div className="my-2">
                            <a
                                className="text-decoration-none text-white me-2"
                                href="#"
                            >
                                About
                            </a>
                            <a
                                className="text-decoration-none text-white me-2"
                                href="#"
                            >
                                Feture
                            </a>
                            <a
                                className="text-decoration-none text-white me-2"
                                href="#"
                            >
                                Pricing
                            </a>
                            <a
                                className="text-decoration-none text-white me-2"
                                href="#"
                            >
                                Carees
                            </a>
                            <a
                                className="text-decoration-none text-white me-2"
                                href="#"
                            >
                                Help
                            </a>
                            <a
                                className="text-decoration-none text-white me-2"
                                href="#"
                            >
                                Privacy Policy
                            </a>
                        </div>
                        <div className="my-2">
                            <p className="text-white me-2">
                                &copy 2021 bike. All rights reserved
                            </p>
                        </div>
                    </div>
                    <div className="me-5">
                        <h5 className="text-white">Get The App</h5>
                        <img
                            className="img-fluid"
                            height="80px"
                            width="135px"
                            src="images/app.png"
                            alt=""
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
