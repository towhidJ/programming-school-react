import React from "react";
import app from "../../asset/images/app.jpg";
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
                    </div>
                    <div className="me-5">
                        <h5 className="text-white">Get The App</h5>
                        <img
                            className="img-fluid"
                            height="80px"
                            width="135px"
                            src={app}
                            alt=""
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
