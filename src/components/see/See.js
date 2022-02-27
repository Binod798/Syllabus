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
    <div>
      {seeSubject.map((item) => (
        <h4>{item}</h4>
      ))}
    </div>
  );
}

export default See;
