import React from "react";
import './CourseSelection.css';
import { getColorBySubject } from "./CourseSelectionFunction";

const CourseSelection = ({course}) => {
    return(
        <div className="course" style={{color: "white", background: getColorBySubject(course)}}>{course}</div>
    )
}

export default CourseSelection; 