import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light header-nav-bg fixed-top">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className=" navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="ms-auto collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link active header-nav-link"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/course-home"
                                    className="nav-link header-nav-link"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/about"
                                    className="nav-link header-nav-link"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contact"
                                    className="nav-link header-nav-link"
                                >
                                    Contact
                                </Link>
                            </li>
                            {/* <li className="nav-item ms-lg-5">
                                <Link
                                    to="/"
                                    className="nav-link header-nav-link"
                                >
                                    About
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
