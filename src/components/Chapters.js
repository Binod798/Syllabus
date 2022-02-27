import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Chapter() {
  const param = useParams();
  const [class11Chapter, setClass11Chapter] = useState([]);
  useEffect(() => {
    const getClass11Chapter = async () => {
      try {
        const response = await axios.get(
          `https://padandaas.herokuapp.com/api/firebase/list-chapter/?level=11&faculty=science&subject=${param.subject}`
        );
        setClass11Chapter(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getClass11Chapter();
  }, []);
  return (
    <div>
      <h4>Class 11 subject</h4>
      {class11Chapter.map((item) => (
        <Link to={`/+2/11/${param.subject}/${item}`}>{item}</Link>
      ))}
    </div>
  );
}

export default Chapter;
