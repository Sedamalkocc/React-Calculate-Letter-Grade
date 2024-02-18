import React, { useState } from "react";
import GradeCalculator from "./GradeCalculator";

const SubjectForm = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [grade, setGrade] = useState("");
  const [average, setAverage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourses([...courses, { courseName, grade }]);
    setCourseName("");
    setGrade("");
  };

  const calculateAverage = () => {
    const totalGrades = courses.reduce(
      (total, course) => total + parseFloat(course.grade),
      0
    );
    const avg = totalGrades / courses.length;
    setAverage(avg.toFixed(2)); // Ortalama 2 ondalık hane ile sınırlı
  };

  const handleClearAll = () => {
    setCourses([]);
    setAverage(null);
  };

  return (
    <div className="subject-form-container">
      <h2>Lessons and Grades</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Lesson Name:
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Grade:
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>

      <h3>List Of Lessons and Grades</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <strong>{course.courseName}</strong>: {course.grade}
          </li>
        ))}
      </ul>

      <button type="button" onClick={calculateAverage}>
        Calculate Average
      </button>
      {average && <GradeCalculator average={average} />}

      <button type="button" className="delete" onClick={handleClearAll}>
        Clear All
      </button>
    </div>
  );
};

export default SubjectForm;
