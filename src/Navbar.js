import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Segment inverted>
      <Menu inverted pointing secondary className="menu">
        <Menu.Item as={NavLink} exact to="/" name="home" />
        <Menu.Item as={NavLink} to="/messages" name="messages" />
        <Menu.Item as={NavLink} to="/friends" name="friends" />
      </Menu>
    </Segment>
  );
};

export default Navbar;
