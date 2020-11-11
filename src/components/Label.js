import React from "react";
import { Box, Typography } from "@material-ui/core";
export default function Label({ user, label }) {
  return (
    <Box style={{ position: "relative", marginBottom: "10px" }}>
      <Typography>{label}</Typography>
      <Box style={{ position: "absolute", top: "2px", left: "85px" }}>:</Box>
      <Typography style={{ position: "absolute", top: "0px", left: "100px" }}>
        {user}
      </Typography>
    </Box>
  );
}

//this component is used to get typography data through props and it will return to comonent
