import React from "react";
import Course from "../Course/Course";
import useCourse from "./../../hooks/useCourse";

const CourseHome = () => {
    // const [courses, setCourses] = useState([]);
    const [courses, setCourses] = useCourse();
    // useEffect(() => {
    //     fetch("./courseApi.JSON")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setCourses(data);
    //         });
    // }, []);

    return (
        <div className="mt-5 pt-3 mx-5 row row-cols-1 row-cols-md-3 g-4">
            {courses.map((course) => (
                <Course course={course}></Course>
            ))}
        </div>
    );
};

export default CourseHome;
