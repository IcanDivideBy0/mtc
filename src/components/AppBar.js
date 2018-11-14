import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import classnames from "classnames";

import PageContent from "./PageContent";
import Drawer from "./Drawer";
import NavList from "./NavList";

const AppBarPlaceholder = styled.div`
  width: 100%;
  height: 56px;
`;

const AppBarWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 56px;
  z-index: 100;
  display: flex;
  background-color: ${({ theme }) => theme.colors.appBar.bg};
  color: ${({ theme }) => theme.colors.appBar.text};
  font-family: ${({ theme }) => theme.fonts.alternate};
  font-size: 0.8em;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
`;

const AppBarContent = styled(PageContent)`
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
`;

const BarNav = styled(Nav)`
  display: none;

  @media ${({ theme }) => theme.devices.small.query} {
    display: flex;
  }
`;

const StyledNavList = styled(NavList)`
  flex: 1;
  padding: 0 0 8px 0;
  display: flex;
  flex-direction: column;

  &.hidden {
    display: none;
  }

  @media ${({ theme }) => theme.devices.small.query} {
    &,
    &.hidden {
      display: flex;
    }

    flex-direction: row;
    padding-bottom: 0;
  }

  ${NavList.Item} {
    display: flex;
    flex-direction: column;
    position: relative;

    a {
      flex: 1 0 auto;
      padding: 8px 16px;
      display: flex;
      align-items: center;

      &,
      &:visited {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.appBar.text};
      }

      &.active {
        color: ${({ theme }) => theme.colors.appBar.highlight};
      }

      @media ${({ theme }) => theme.devices.small.query} {
        border-bottom: 2px solid transparent;

        &.active {
          border-bottom-color: ${({ theme }) => theme.colors.appBar.highlight};
          color: ${({ theme }) => theme.colors.appBar.highlight};
        }
      }
    }

    &:hover > a {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  ${NavList} {
    /* 2nd level nav list */
    padding-left: ${({ theme }) => theme.gridGutter}px;

    ${NavList.Item} {
      font-size: 0.9rem;
      flex: 1 0 auto;

      a {
        padding: 4px 16px;

        &.active {
          border-bottom-color: transparent;
        }
      }
    }

    @media ${({ theme }) => theme.devices.small.query} {
      flex-direction: column;
      padding-left: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateY(100%);
      background-color: ${({ theme }) => theme.colors.appBar.bg};
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
      transition: opacity 0.15s linear;
      opacity: 0;
      pointer-events: none;

      a:not(:last-child) {
        padding-right: 32px;

        &::after {
          content: "";
          display: block;
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid ${({ theme }) => theme.colors.appBar.text};
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }
      }

      ${NavList} {
        /* 3rd level nav list and device > small */
        bottom: auto;
        left: auto;
        top: 0;
        right: 0;
        transform: translateX(100%);
      }
    }
  }

  @media ${({ theme }) => theme.devices.small.query} {
    ${NavList.Item}:hover > ${NavList} {
      opacity: 1;
      pointer-events: initial;
    }
  }
`;

function MenuButton({ className, active, ...props }) {
  return (
    <button className={classnames(className, { active })} {...props}>
      <svg viewBox="0 0 40 40" width="40" height="40">
        <line
          x1="6"
          y1="10"
          x2="34"
          y2="10"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="6"
          className="line-1"
        />
        <line
          x1="6"
          y1="20"
          x2="34"
          y2="20"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="6"
          className="line-2"
        />
        <line
          x1="6"
          y1="20"
          x2="34"
          y2="20"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="6"
          className="line-3"
        />
        <line
          x1="6"
          y1="30"
          x2="34"
          y2="30"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="6"
          className="line-4"
        />
      </svg>
    </button>
  );
}

const StyledMenuButton = styled(MenuButton)`
  margin: 8px;
  padding: 0;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  line {
    transition: all 0.2s linear;
    transform-origin: 50% 50%;
  }

  &.active {
    .line-1 {
      opacity: 0;
      transform: scale(0);
    }
    .line-2 {
      transform: rotate(45deg);
    }
    .line-3 {
      transform: rotate(-45deg);
    }
    .line-4 {
      opacity: 0;
      transform: scale(0);
    }
  }

  @media ${({ theme }) => theme.devices.small.query} {
    display: none;
  }
`;

const StyledDrawer = styled(Drawer)`
  top: 56px;
  padding: ${({ theme }) => theme.gridGutter}px;
  background-color: ${({ theme }) => theme.colors.appBar.bg};
  color: ${({ theme }) => theme.colors.appBar.text};

  ${StyledNavList} {
    font-family: ${({ theme }) => theme.fonts.alternate};
  }
`;

class AppBar extends React.Component {
  state = {
    drawerActive: false,
  };

  componentDidMount() {
    this.historyUnlisten = this.props.history.listen(() => {
      this.setState({ drawerActive: false });
    });
  }

  componentWillUnmount() {
    this.historyUnlisten();
  }

  handleToggleMenu = () => {
    this.setState(state => ({ drawerActive: !state.drawerActive }));
  };

  render() {
    const { navItems } = this.props;

    return (
      <>
        <AppBarPlaceholder />
        <AppBarWrapper>
          <AppBarContent>
            <BarNav>
              <StyledNavList items={navItems} />
            </BarNav>

            <StyledMenuButton
              onClick={this.handleToggleMenu}
              active={this.state.drawerActive}
            />

            <StyledDrawer
              onOverlayClick={this.handleToggleMenu}
              active={this.state.drawerActive}
            >
              <h1>Hello</h1>

              <Nav>
                <StyledNavList items={navItems} />
              </Nav>
            </StyledDrawer>
          </AppBarContent>
        </AppBarWrapper>
      </>
    );
  }
}

export default withRouter(AppBar);
