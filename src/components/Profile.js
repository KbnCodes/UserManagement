import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Divider,
  CardMedia,
  Grid,
} from "@material-ui/core";
import "../styles/card.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    profilepicture: "",
    companyname: "",
    bs: "",
    catchphrase: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <>
      <Grid item xs={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={user.name}
              height="150"
              image={user.profilepicture}
            ></CardMedia>
          </CardActionArea>
          <CardContent>
            <ul>
              <li>Username:{user.username}</li>
              <li>e-mail:{user.email}</li>
              <li>Phone:{user.phone}</li>
              <li>Website:{user.website}</li>
            </ul>
            <Divider />
            <ul>
            <li>Name:</li>
            <li>catchPhrase:</li>
            <li>bs:</li>
          </ul>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={8}>
        Address:
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <ul>
            <li>Street:</li>
            <li>Suite:</li>
            <li>City:</li>
            <li>Zipcode:</li>
          </ul>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
