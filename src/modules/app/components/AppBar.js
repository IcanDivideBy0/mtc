import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import { Layout } from "modules/common";

const appBarSizeStyles = css`
  width: 100%;
  height: 56px;

  @media screen and (min-width: 700px) {
    height: 64px;
  }
`;

const AppBarPlaceholder = styled.div`
  ${appBarSizeStyles};
`;

const AppBarWrapper = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  background-color: #fff;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);

  ${appBarSizeStyles};
`;

const AppBarContent = styled(Layout)`
  flex: 1;
  display: flex;
`;

const NavList = ({ className, ...props }) => (
  <nav className={className}>
    <ul className="nav-list" {...props} />
  </nav>
);

const StyledNavList = styled(NavList)`
  flex: 1;
  display: flex;

  .nav-list {
    flex: 1;
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
  margin: ${({ theme }) => theme.gridGutter / 2}px;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  .nav-link {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    &.active {
      border-bottom: 1px solid #000;
    }
  }
`;

export default function AppBar() {
  return (
    <>
      <AppBarPlaceholder />
      <AppBarWrapper>
        <AppBarContent>
          <StyledNavList>
            <StyledNavItem exact to="/">
              Home
            </StyledNavItem>
            <StyledNavItem exact to="/contact">
              Contact
            </StyledNavItem>
          </StyledNavList>
        </AppBarContent>
      </AppBarWrapper>
    </>
  );
}
