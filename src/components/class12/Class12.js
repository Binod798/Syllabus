import React, { useState, useEffect } from "react";
import axios from "axios";

function Class12() {
  const [class12Subject, setClass12Subject] = useState([]);
  useEffect(() => {
    const getClass12 = async () => {
      try {
        const response = await axios.get(
          "https://padandaas.herokuapp.com/api/firebase/list-directory/?level=12&faculty=science"
        );
        setClass12Subject(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getClass12();
  }, []);
  return (
    <div>
      <h4>Class 12 subject</h4>
      {class12Subject.map((item) => (
        <h4>{item}</h4>
      ))}
    </div>
  );
}

export default Class12;
