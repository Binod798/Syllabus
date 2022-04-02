import React, { useState } from "react";
import { Link } from "react-router-dom";

function Class12() {
  const class12Subject = [
    "Nepali",
    "English",
    "Social Studies",
    "Physics",
    "Accounting",
    "Biology",
    "Business Studies",
    "Computer Science",
    "Chemistry",
    "Economics",
    "Mathematics",
    "Marketing",
    "Business Mathematics",
    "Hotel Management",
  ];

  return (
    <div className="subjectContainer">
      <h4 className="subjectContainerTitle">Choose Class 12 Subjects</h4>
      <div className="subjectContainerFlex">
        {class12Subject.map((item) => (
          <Link to={`/+2/11/${item}`}>
            <div className="subjectContainerItem">{item}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Class12;
