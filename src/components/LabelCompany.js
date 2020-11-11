import React from "react";
import { Box, Typography } from "@material-ui/core";
export default function LabelCompany({ user, label }) {
  return (
    <Box style={{ position: "relative", marginBottom: "50px" }}>
      <Typography>{label}</Typography>
      <Box style={{ position: "absolute", top: "2px", left: "116px" }}>:</Box>
      <Typography style={{ position: "absolute", top: "0px", left: "130px" }}>
        {user}
      </Typography>
    </Box>
  );
}
