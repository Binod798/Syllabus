import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Pdf() {
  const [pdf, setPdf] = useState("");

  const param = useParams();
  console.log(param.subject, "pdf param");
  useEffect(() => {
    const getPdf = async () => {
      try {
        const response = await axios.get(
          `https://padandaas-v2.herokuapp.com/api/firebase/file?level=11&type=QC&subject=Accountancy%20(1031)&file=Accountancy`
        );
        setPdf(response.data.pdfUrl);
        console.log(response.data.pdfUrl);
      } catch (error) {
        console.log(error);
      }
    };
    getPdf();
  }, []);

  return (
    <div>
      <embed
        type="application/pdf"
        src={pdf}
        width="100%"
        height="600px"
      ></embed>
    </div>
  );
}

export default Pdf;
