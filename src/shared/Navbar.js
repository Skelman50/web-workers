import React from "react";
import useReactRouter from "use-react-router";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const { location } = useReactRouter();
  const homeClassname = () => {
    switch (location.pathname) {
      case "/":
      case "/bio":
      case "/pics":
      case "/companies":
      case "/links":
        return "active";

      default:
        return "";
    }
  };
  return (
    <Segment inverted className="nav">
      <Menu inverted pointing secondary className="menu">
        <Menu.Item
          icon="home"
          as={Link}
          to={"/"}
          name="home"
          position="right"
          className={homeClassname()}
        />
        <Menu.Item icon="chat" as={NavLink} to="/messages" name="messages" />
        <Menu.Item icon="users" as={NavLink} to="/friends" name="friends" />
      </Menu>
    </Segment>
  );
};

export default Navbar;
