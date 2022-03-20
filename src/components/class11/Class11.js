import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Class11() {
  const [class11Subject, setClass11Subject] = useState([]);
  useEffect(() => {
    const getClass11 = async () => {
      try {
        const response = await axios.get(
          "https://padandaas-v2.herokuapp.com/api/firebase/list-subjects/?level=11&type=Notes"
        );
        setClass11Subject(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getClass11();
  }, []);
  return (
    <div className="subjectContainer">
      <h4 className="subjectContainerTitle">Choose subject</h4>
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
