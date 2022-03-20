import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Class12() {
  const [class12Subject, setClass12Subject] = useState([]);
  useEffect(() => {
    const getClass12 = async () => {
      try {
        const response = await axios.get(
          "https://padandaas-v2.herokuapp.com/api/firebase/list-subjects/?level=12&type=Notes"
        );
        setClass12Subject(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getClass12();
  }, []);
  return (
    <div className="subjectContainer">
      <h4 className="subjectContainerTitle">Choose subject</h4>
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
