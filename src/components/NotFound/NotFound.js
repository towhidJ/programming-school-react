import React from "react";
import error from "../../asset/images/404.jpg";
const NotFound = () => {
    return (
        <div className="container text-center">
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ padding: "120px" }}
            >
                <div>
                    <img src={error} alt="Error" style={{ height: "100px" }} />
                </div>
                <div>
                    <h1>404 Page Not Found</h1>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
