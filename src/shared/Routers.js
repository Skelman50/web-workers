import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "../pages/home/Home";
import Messages from "../pages/messages/Messages";

const Routers = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/bio" component={HomePage} />
        <Route exact path="/pics" component={HomePage} />
        <Route exact path="/companies" component={HomePage} />
        <Route exact path="/links" component={HomePage} />
        <Route exact path="/messages" component={Messages} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
