import { Button } from "@mui/material";
import model from "../../asset/images/model.png";
import "./Course.css";
const Course = () => {
    return (
        <div>
            <div className="card">
                <img src={model} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </p>
                </div>
                <div className="card-footer">
                    <div className="pb-2 d-flex justify-content-between align-items-center">
                        <div>$256</div>
                        <div>
                            <Button variant="outlined">Buy Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
