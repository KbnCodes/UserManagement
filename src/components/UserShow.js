import { AppBar, Grid,Avatar } from "@material-ui/core";
import React from "react";
import Sidebar from "./Sidebar";
import '../styles/usershow.css'
import Profile from './Profile'
import {useHistory, useParams} from 'react-router-dom'
import ComingSoon from "./ComingSoon";

const UserShow = () => {
    //use history and params hooks to get url of selected user
    const history = useHistory()
    const {id} = useParams()
  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
          
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            
            {/* if user is in 'user/profile' url then show profile component otherwise show comingsoon component */}
            <Grid item xs={12}>
                {history.location.pathname == `/users/profile/${id}` ?
                (
                    <Profile/>
                ):
                <ComingSoon/>
                } 
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserShow;
