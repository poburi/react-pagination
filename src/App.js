import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route path={`/detail/:id`} component={PostDetail} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
