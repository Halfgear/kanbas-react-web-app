import { courses } from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css";
function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div className="courses-container">
            <h1><HiMiniBars3 className="react-icon" />  {course?._id} {course?.name}</h1>
        </div>
    );
}
export default Courses;