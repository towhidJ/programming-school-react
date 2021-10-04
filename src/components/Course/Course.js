import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import { blueGrey, purple, teal } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import "./Course.css";
const Course = (props) => {
    const { name, img, instructor, price, star, students, seat, description } =
        props.course;

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: teal[700],
        "&:hover": {
            backgroundColor: blueGrey[800],
        },
    }));
    return (
        <div>
            <div className="card course-card">
                <img src={img} className="card-img-top course-img" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h5 className="card-title">{instructor}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <div className="pb-2 d-lg-flex justify-content-between  align-items-center">
                        <div>
                            <p style={{ color: "darkcyan", fontWeight: "700" }}>
                                <i className="fas fa-graduation-cap    "> </i>
                                {students} Students
                            </p>
                        </div>
                        <div style={{ color: "green", fontWeight: "700" }}>
                            <p>Total Seat {seat}</p>
                        </div>
                    </div>
                    <div className="pb-2 d-lg-flex justify-content-between  align-items-center">
                        <div>
                            <Rating name="size-small" defaultValue={star} />
                        </div>

                        <div>
                            <h4 style={{ color: "tomato" }}>${price}</h4>
                        </div>
                    </div>

                    <div className="text-center">
                        <ColorButton variant="contained">Buy Now</ColorButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
