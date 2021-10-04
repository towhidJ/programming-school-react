import React from "react";

const Contact = () => {
    return (
        <div className="mt-5 pt-5">
            <div className="text-center container">
                <p>Contact Information</p>
                <h1>Let's Talk About For Your Business</h1>
                <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                    odio sit amet nibh vulputate cursus a sit amet mauris.
                </p>
            </div>
            <div className="  d-flex justify-content-around align-items-center">
                <div>
                    <div className="  d-flex justify-content-between">
                        <div className="me-4">
                            <h1>
                                <i className="fas fa-phone    "></i>
                            </h1>
                        </div>
                        <div>
                            <h5>Make A Call</h5>
                            <p>Let’s Talk with our Experts</p>
                        </div>
                    </div>
                    <div style={{ fontSize: "24px" }} className="fw-medium">
                        <p>+8801521401825</p>
                        <p>Mon - Fri: 09.00 to 17.00</p>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="  d-flex justify-content-between">
                            <h1 className="me-4">
                                <i className="fa fa-location-arrow"></i>
                            </h1>
                        </div>
                        <div>
                            <h5>Location</h5>
                            <p>Visit Our Office</p>
                        </div>
                    </div>
                    <div style={{ fontSize: "24px" }} className="fw-medium">
                        <p>Chittagong</p>
                        <p>Bangladesh</p>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="  d-flex justify-content-between">
                            <h1 className="me-4">
                                <i className="fas fa-mail-bulk    "></i>
                            </h1>
                        </div>
                        <div>
                            <h5>Send An Email</h5>
                            <p>Don’t Hesitate to Email</p>
                        </div>
                    </div>
                    <div style={{ fontSize: "24px" }} className="fw-medium">
                        <p>info@shopbyte.com.bd</p>
                        <p>support@shopbyte.com.bd</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
