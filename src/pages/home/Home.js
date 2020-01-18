import React from "react";
import { Grid, Menu } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
import Pics from "./containers/Pics";
import Bio from "./containers/Bio";
import HomeWelcome from "./containers/HomeWelcome";

const HomePage = () => {
  return (
    <Grid>
      <Grid.Column width={4}>
        <Menu fluid vertical tabular>
          <Menu.Item as={NavLink} to="/bio" name="bio" />
          <Menu.Item as={NavLink} to="/pics" name="pics" />
          <Menu.Item as={NavLink} to="/companies" name="companies" />
          <Menu.Item as={NavLink} to="/links" name="links" />
        </Menu>
      </Grid.Column>
      <Grid.Column stretched width={12}>
        <Route exact path="/" component={HomeWelcome} />
        <Route path="/pics" component={Pics} />
        <Route path="/bio" component={Bio} />
      </Grid.Column>
    </Grid>
  );
};

export default HomePage;
