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
    <div className="subjectContainer">
      <h4 className="subjectContainerTitle">Choose Chapter</h4>
      <div className="subjectContainerFlex">
        {class11Chapter.map((item) => (
          <Link to={`/+2/11/${item}`}>
            <div className="subjectContainerItem">{item.split(".")[0]}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Chapter;
