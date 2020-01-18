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
        <Route path="/bio" component={HomePage} />
        <Route path="/pics" component={HomePage} />
        <Route path="/companies" component={HomePage} />
        <Route path="/links" component={HomePage} />
        <Route path="/messages" component={Messages} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
