import { AppBar, Grid,Avatar } from "@material-ui/core";
import React from "react";
import Sidebar from "./Sidebar";
import '../styles/usershow.css'
import Profile from './Profile'

const UserShow = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
              
          <Grid container>
            <Grid item xs={12}>
              <Profile/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserShow;
