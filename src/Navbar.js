import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Navbar extends Component {
  state = { activeItem: null };
  componentDidMount() {
    const activeItem = this.getlocation();
    console.log(activeItem);
    this.setState({ activeItem });
  }

  getlocation = () => {
    const { pathname } = this.props.location;
    if (pathname === "/") return "home";
    return pathname.slice(1, pathname.length);
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Segment inverted>
        <Menu inverted pointing secondary className="menu">
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link}
            to="/messages"
            name="messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link}
            to="/friends"
            name="friends"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}

export default withRouter(Navbar);
