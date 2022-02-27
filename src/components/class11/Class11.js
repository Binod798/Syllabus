import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Class11() {
  const [class11Subject, setClass11Subject] = useState([]);
  useEffect(() => {
    const getClass11 = async () => {
      try {
        const response = await axios.get(
          "https://padandaas.herokuapp.com/api/firebase/list-directory/?level=11&faculty=science"
        );
        setClass11Subject(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getClass11();
  }, []);
  return (
    <div>
      <h4>Class 11 subject</h4>
      {class11Subject.map((item) => (
        <Link to={`/+2/11/${item}`}>{item}</Link>
      ))}
    </div>
  );
}

export default Class11;
