import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box"

import CircularProgress from '@mui/material/CircularProgress';

function See() {
  const [seeSubject, setSeeSubject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getSee = async () => {
      try {
        const response = await axios.get(
          "https://padandaas.herokuapp.com/api/firebase/list-directory/?level=see&faculty=see"
        );
        setIsLoading(false);
        setSeeSubject(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSee();
  }, []);
  return (
    <>
      {isLoading ? <Box sx={{ display: 'flex',justifyContent:"center",flexWrap:'wrap',alignContent:"center",height:"60vh"}}>
        <CircularProgress  />
      </Box> :
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
      }
    </>


  );
}

export default See;
