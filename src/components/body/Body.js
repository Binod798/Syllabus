import React from "react";
import Grid from "@mui/material/Grid";

function Body() {
  return (
    <div className="bodyContainer">
      <Grid container>
        <Grid item sm={9}>
          <h3>LOGO description</h3>
          <p>heldfjasdjfoadjladjfijalkcjkjkvckjvlkjxcjsldfjlkjdflckji</p>
        </Grid>
        <Grid item sm={3}>
          <div className="addContainer">1</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Body;
