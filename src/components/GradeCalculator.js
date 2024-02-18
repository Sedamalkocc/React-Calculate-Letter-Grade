import React from "react";

const GradeCalculator = ({ average }) => {
  const calculateLetterGrade = (average) => {
    if (average >= 85) {
      return "A";
    } else if (average >= 70) {
      return "B";
    } else if (average >= 55) {
      return "C";
    } else if (average >= 40) {
      return "D";
    } else {
      return "F";
    }
  };

  return (
    <div>
      <h2>Average Grade and Letter Grade</h2>
      <p>Your average grade: {average}</p>
      <p>Your letter grade: {calculateLetterGrade(average)}</p>
    </div>
  );
};

export default GradeCalculator;
