import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

import PageContent from "./PageContent";
import NavList from "./NavList";

const AppMenuWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.appMenu.bg};
  color: ${({ theme }) => theme.colors.appMenu.text};
  font-family: ${({ theme }) => theme.fonts.alternate};
  font-size: 0.8em;
  font-weight: 700;

  display: flex;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);

  @media ${({ theme }) => theme.devices.small.query} {
    height: 56px;
  }
`;

const AppMenuContent = styled(PageContent)`
  display: flex;
  flex-direction: column;
`;

const MobileMenuButton = styled.button`
  height: 56px;
  padding: 8px 16px;
  margin: 0 -16px;
  border: none;
  background: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.alternate};
  font-size: 1em;
  color: ${({ theme }) => theme.colors.appMenu.text};
  text-align: left;

  @media ${({ theme }) => theme.devices.small.query} {
    display: none;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 8px solid ${({ theme }) => theme.colors.appMenu.text};
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;

    margin-right: 8px;
    transform-origin: 50% 50%;
    transition: transform 0.15s linear;
  }

  &.expanded::before {
    transform: rotate(90deg);
  }
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
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
        color: ${({ theme }) => theme.colors.appMenu.text};
      }

      &.active {
        color: ${({ theme }) => theme.colors.appMenu.highlight};
      }

      @media ${({ theme }) => theme.devices.small.query} {
        border-bottom: 2px solid transparent;

        &.active {
          border-bottom-color: ${({ theme }) => theme.colors.appMenu.highlight};
          color: ${({ theme }) => theme.colors.appMenu.highlight};
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
      background-color: ${({ theme }) => theme.colors.appMenu.bg};
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
          border-left: 8px solid ${({ theme }) => theme.colors.appMenu.text};
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

class AppMenu extends React.Component {
  state = {
    showMobileMenu: false,
  };

  componentDidMount() {
    this.historyUnlisten = this.props.history.listen(() => {
      this.setState({ showMobileMenu: false });
    });
  }

  componentWillUnmount() {
    this.historyUnlisten();
  }

  handleToggleMobileMenu = () => {
    this.setState(state => ({ showMobileMenu: !state.showMobileMenu }));
  };

  render() {
    const { navItems } = this.props;
    const { showMobileMenu } = this.state;

    return (
      <AppMenuWrapper>
        <AppMenuContent>
          <MobileMenuButton
            onClick={this.handleToggleMobileMenu}
            className={showMobileMenu && "expanded"}
          >
            Menu
          </MobileMenuButton>

          <Nav>
            <StyledNavList
              className={!showMobileMenu && "hidden"}
              items={navItems}
            />
          </Nav>
        </AppMenuContent>
      </AppMenuWrapper>
    );
  }
}

export default withRouter(AppMenu);
