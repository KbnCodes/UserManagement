import React, { useEffect, useState } from "react";
import "../styles/card.css";
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
    <div>
        <Card className="card_style" style={{marginTop:"auto", marginBottom:"auto" }}>
          <CardContent>
            <Typography variant="h4">
              Select an acc
            </Typography>
          {/* <Scrollbars style={{width:300}}> */}
          <Paper style={{maxHeight:300 , overflow:'auto'}}>
            {users.map((user) => {
              return (
                <>
                  <Link className="text_style" to={`/users/${user.id}`}>
                    <ListItem key={user.id}>
                      <ListItemAvatar>
                        <Avatar alt={user.name} src={user.profilepicture} />
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
      </div>
    
  );
};

export default UserAccountCard;
