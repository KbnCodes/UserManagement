import React from "react";
import "../styles/comingsoon.css";
import { Grid, Typography, Divider } from "@material-ui/core";
import ProfileView from "./ProfileView";
function ComingSoon() {
  return (
    <>
      <Grid container>
        <Grid item xs={6} className="profile_style">
          <Typography>Profile</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{ float: "right" }}>
            <ProfileView />{" "}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container className="coming_soon">
        <h1>Coming Soon</h1>
      </Grid>
    </>
  );
}

export default ComingSoon;
