import React, { useEffect, useState } from "react";
import "../styles/modal.css";
import {List,Card,ListItem,Avatar,IconButton,Button,ListItemAvatar,ListItemText} from "@material-ui/core";
import Modal from "react-modal";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});

  const { id } = useParams();
  let history = useHistory();
  useEffect(() => {
    loadUser();
  }, []);

  const redirect = () => {
    history.push("/");
  };
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <IconButton onClick={toggleModal}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={user.name} src={user.profilepicture}></Avatar>
            </ListItemAvatar>
            <ListItemText>{user.name}</ListItemText>
          </ListItem>
        </List>
      </IconButton>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="mymodal"
        closeTimeoutMS={100}
      >
        <Card>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={user.profilepicture} alt={user.name} />
              </ListItemAvatar>
            </ListItem>

            <ListItem>{user.name}</ListItem>
            <ListItem>{user.email}</ListItem>
            <Button variant="contained" color="secondary" onClick={redirect}>
              Sign Out
            </Button>
          </List>
        </Card>
      </Modal>
    </div>
  );
}
