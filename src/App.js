import React from "react";
import "./App.css";
import Home from "./components/Home";
import UserShow from "./components/UserShow";
import { BrowserRouter, Route ,Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/users/profile/:id" component={UserShow}/>
        <Route path="/users/post/:id"component={UserShow}/>
        <Route path="/users/gallery/:id"component={UserShow}/>
        <Route path="/users/todo/:id"component={UserShow}/>
      </Switch>

      {/* <UserShow/> */}
    </BrowserRouter>
  );
}

export default App;
