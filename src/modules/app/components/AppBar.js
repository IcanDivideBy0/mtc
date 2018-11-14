import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import styled from "styled-components";

const AppBarWrapper = styled.header`
  background-color: #fff;

  &.home {
    background-color: red;
  }
`;

const NavList = ({ className, ...props }) => (
  <nav className={className}>
    <ul className="nav-list" {...props} />
  </nav>
);

const StyledNavList = styled(NavList)`
  .nav-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
`;

const NavItem = ({ className, ...props }) => (
  <li className={className}>
    <NavLink className="nav-link" {...props} />
  </li>
);

const StyledNavItem = styled(NavItem)`
  flex: 1;
  display: flex;

  .nav-link {
    display: block;
    flex: 1;
    text-align: center;

    &.active {
      border-bottom: 1px solid #000;
    }
  }
`;

function AppBar({ location }) {
  return (
    <AppBarWrapper className={classnames({ home: location.pathname === "/" })}>
      <StyledNavList>
        <StyledNavItem exact to="/">
          Home
        </StyledNavItem>
        <StyledNavItem exact to="/contact">
          Contact
        </StyledNavItem>
      </StyledNavList>
    </AppBarWrapper>
  );
}

export default withRouter(AppBar);
