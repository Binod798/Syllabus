import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function login() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack>
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Stack>
      </Box>
    </div>
  );
}

export default login;
