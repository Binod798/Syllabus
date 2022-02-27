import React, { useState, useEffect } from "react";
import axios from "axios";

function See() {
  const [seeSubject, setSeeSubject] = useState([]);
  useEffect(() => {
    const getSee = async () => {
      try {
        const response = await axios.get(
          "https://padandaas.herokuapp.com/api/firebase/list-directory/?level=see&faculty=see"
        );
        setSeeSubject(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSee();
  }, []);
  return (
    <div className="subjectContainer">
      <h4 className="subjectContainerTitle">Choose subject</h4>
      <div className="subjectContainerFlex">
        {seeSubject.map((item) => (
          <div className="subjectContainerItem">
            <span style={{ fontSize: "25px", color: "#0d6efd" }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default See;
