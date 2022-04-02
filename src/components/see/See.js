import React, { useState } from "react";
// import axios from "axios";
// import Box from "@mui/material/Box"

// import CircularProgress from '@mui/material/CircularProgress';

function See() {
  const seeSubject = [
    "Compulsory English",
    "Compulsory Mathematics",
    "Compulsory Nepali",
    "Compulsory Science",
    "Computer Science",
    "Health Population & Environment Education",
    "Accountancy",
    "Optional Mathmatics",
    "Optional Literature",
    "Social Studies",
  ];

  return (
    <>
      <div className="subjectContainer">
        <h4 className="subjectContainerTitle">Choose SEE Subject</h4>
        <div className="subjectContainerFlex">
          {seeSubject.map((item) => (
            <div className="subjectContainerItem">
              <span style={{ fontSize: "25px", color: "white" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default See;
