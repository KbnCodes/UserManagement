import React, { useState, useEffect } from "react";
import { Divider, Grid, Avatar, Typography, Box } from "@material-ui/core";
import ProfileView from "../components/ProfileView";
import Label from "./Label";
import LabelCompany from "./LabelCompany";
import "../styles/card.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Profile() {
  //hook state
  const [user, setUser] = useState({});
  //accessing params
  const { id } = useParams();
  
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  console.log("user", user);
  return (
    <>
      <Grid container>
        <Grid item xs={6} className="profile_style">
          <Typography>Profile</Typography>
        </Grid>
        <Grid item xs={6}>
          <ProfileView style={{ float: "right" }} />
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid
          item
          xs={4}
          style={{ borderRight: "1px solid rgba()", paddingRight: "30px" }}
        >
          {console.log(user.id)}
          <Avatar
            alt={user.name}
            src={user.profilepicture}
            style={{
              width: "130px",
              height: "130px",
              marginLeft: "110px",
              marginTop: "30px",
              marginBottom: "10px",
            }}
          />
          <Typography align="center">{user.name}</Typography>
          <Divider />
          <Box style={{ marginTop: "1rem", marginLeft: "4rem" }}>
            <Label label="Username" user={user.username} />
            <Label label="Name" user={user.name} />
            <Label label="Email" user={user.email} />
            <Label label="Website" user={user.website} />
          </Box>
          <Divider />
          <Typography align="center">Company</Typography>

          <Box style={{ marginTop: "1rem", marginLeft: "4rem" }}>
            {/* LabelCompany component called and passed label and company details */}
            <LabelCompany
              label="Name"
              user={user.company ? user.company.name : ""}
            />
            <LabelCompany
              label="Catch Phrase"
              user={user.company ? user.company.catchPhrase : ""}
            />
            <LabelCompany
              label="BS"
              user={user.company ? user.company.bs : ""}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Typography
            style={{
              marginLeft: "30px",
              marginTop: "30px",
              position: "relative",
            }}
          >
            Address:
          </Typography>
          <Box style={{ marginLeft: "70px", marginTop: "20px" }}>
            {/* Label component called and passed label and Address details */}

            <Label
              label="Street"
              user={user.address ? user.address.street : ""}
            />
            <Label
              label="Suite"
              user={user.address ? user.address.suite : ""}
            />
            <Label label="City" user={user.address ? user.address.city : ""} />
            <Label
              label="Zip Code"
              user={user.address ? user.address.zipcode : ""}
            />
          </Box>
          <Box>
            {/* Included map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23756.80816997078!2d77.58448475699774!3d12.94946521324266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15eb70e59e15%3A0xd76de165b4e08da4!2sLalbagh!5e0!3m2!1sen!2sin!4v1605070933746!5m2!1sen!2sin"
              width="500"
              height="300"
              frameborder="0"
              style={{ border: 0, paddingLeft: "60px", display: "flex" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Box>
          <Box></Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
