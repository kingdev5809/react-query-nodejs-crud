import React from "react";
import { Nav, NavInner, NavItem } from "./Styles";

function Navbar() {
  return (
    <Nav>
      <NavInner>
        <NavItem>Home</NavItem>
        <NavItem>News</NavItem>
        <NavItem>Posts</NavItem>
      </NavInner>
    </Nav>
  );
}

export default Navbar;
