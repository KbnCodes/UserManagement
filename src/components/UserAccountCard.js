import React, { useEffect, useState } from "react";
import "../styles/card.css";
import {Box} from '@material-ui/core'
import axios from "axios";
import { Link } from "react-router-dom";
// import { Scrollbars } from 'react-custom-scrollbars'
import {
  Avatar,
  Card,
  Typography,
  Paper,
  CardContent,
  ListItem,
  ListItemAvatar,
  Divider,
  ListItemText,
} from "@material-ui/core";

function UserAccountCard() {
  //create hooks for storing user accounts
  //using only get method so no need to create state store data
  const [users, setUser] = useState([]);

  //To execute loadusers() 
  useEffect(() => {
    loadUsers();
  }, []);

  //retreiving data from api
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3003/users`);
    setUser(result.data);
  };
  return (
    <Box borderRadius="16%">
        <Card className="card_style" style={{  marginTop:"40px" , marginLeft:"auto", marginRight:"auto"}}>
          <CardContent>
            <Typography variant="h6" align="center">
              Select an account
            </Typography>
          {/* <Scrollbars style={{width:300}}> */}
          <Paper style={{maxHeight:450 , overflow:'auto'}}>
            {users.map((user) => {
              return (
                <>
                  <Link className="text_style" to={`/users/profile/${user.id}`}>
                    <ListItem key={user.id}>
                      <ListItemAvatar>
                        <Avatar alt={user.name} src={user.profilepicture} className="classes.small" />
                      </ListItemAvatar>
                      <ListItemText id={user.id} primary={user.name} />
                    </ListItem>
                  </Link>
                  <Divider />
                </>
              );
            })}
            </Paper>
            {/* </Scrollbars> */}
          </CardContent>
        </Card>
      </Box>
    
  );
};

export default UserAccountCard;
