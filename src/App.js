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
        <Route path="/users/:id" component={UserShow}/>
      </Switch>

      {/* <UserShow/> */}
    </BrowserRouter>
  );
}

export default App;
