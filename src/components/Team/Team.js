import React from "react";

const Team = () => {
    return (
        <div className="py-5" style={{ backgroundColor: "aliceblue" }}>
            <div className="text-center">
                <h1 className="fw-bold" style={{ color: "darkorange" }}>
                    Meet professionals
                </h1>
            </div>
            <div className=" mx-5 mt-2 py-4 row row-cols-1 row-cols-md-3 gx-4">
                <div className="col">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://randomuser.me/api/portraits/men/42.jpg"
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Hululu Henry</h5>
                                    <p className="card-text">
                                        Wordpress Developer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div
                        className="card mb-3 col"
                        style={{ maxWidth: "540px" }}
                    >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://randomuser.me/api/portraits/men/85.jpg"
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Lukaku Jhon</h5>
                                    <p className="card-text">Php Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://randomuser.me/api/portraits/men/35.jpg"
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Bil Gets</h5>
                                    <p className="card-text">C# Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://randomuser.me/api/portraits/men/83.jpg"
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Henry Apple</h5>
                                    <p className="card-text">Swift Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://randomuser.me/api/portraits/men/65.jpg"
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Ciki Henry</h5>
                                    <p className="card-text">
                                        Angular Developer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://randomuser.me/api/portraits/men/25.jpg"
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Juker Berg</h5>
                                    <p className="card-text">React Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
