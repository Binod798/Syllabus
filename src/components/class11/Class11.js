import React, { useState } from "react";
import { Link } from "react-router-dom";

function Class11() {
  const class11Subject = [
    "Nepali",
    "English",
    "Social Studies",
    "Physics",
    "Accounting",
    "Biology",
    "Business Studies",
    "Computer Science (4271)",
    "Chemistry",
    "Economics",
    "Mathematics",
    "Marketing",
    "Business Mathematics",
    "Hotel Management",
  ];

  return (
    <div className="subjectContainer">
      <h4 className="subjectContainerTitle">Choose Class 11 Subjects</h4>
      <div className="subjectContainerFlex">
        {class11Subject.map((item) => (
          <Link to={`/+2/11/${item}`}>
            <div className="subjectContainerItem">{item}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Class11;
