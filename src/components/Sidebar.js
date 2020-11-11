import { Divider, Box, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/usershow.css";
import { useParams } from "react-router-dom";

function Sidebar() {
  const { id } = useParams();
  return (
    <Box className="sidebar_style">
      <Box className="align_center" >
        <Link to={`/users/profile/${id}`} className="link_style">
          <Typography style={{ display: "inline-block" }}> Profile</Typography>
        </Link>
        <Divider/>
        <Link to={`/users/post/${id}`} className="link_style">
          {" "}
          <Typography style={{ display: "inline-block" }}> Posts</Typography>
        </Link>
        <Divider/>
        <Link to={`/users/gallery/${id}`} className="link_style">
          <Typography style={{ display: "inline-block" }}> Gallery</Typography>
        </Link>
        <Divider/>
        <Link to={`/users/todo/${id}`} className="link_style">
          <Typography style={{ display: "inline-block" }}> Todo</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Sidebar;
