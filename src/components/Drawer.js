import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import classnames from "classnames";

const STOP_SCROLL_CLASS = "drawer-stop-scroll";

const DrawerGlobalStyles = createGlobalStyle`
  body.${STOP_SCROLL_CLASS} {
    overflow: hidden;
  }
  
  @media ${({ theme }) => theme.devices.small.query} {
    body.${STOP_SCROLL_CLASS} {
      overflow: initial;
    }
  }
`;

const DrawerOverlay = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);

  opacity: 1;
  transition: opacity 0.2s linear;

  &:not(.active) {
    pointer-events: none;
    opacity: 0;
  }

  @media ${({ theme }) => theme.devices.small.query} {
    pointer-events: none;
    opacity: 0;
  }
`;

const DrawerContent = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  bottom: 0;
  width: 100vw;
  background: #fff;

  right: 0;
  opacity: 1;
  transition: opacity 0.2s linear, transform 0.2s linear;

  &:not(.active) {
    transform: translateX(100%);
    opacity: 0;
  }

  @media ${({ theme }) => theme.devices.small.query} {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export default class Drawer extends React.Component {
  componentDidUpdate(prevProps) {
    const { active } = this.props;

    if (prevProps.active === active) return;

    const el = document.querySelector("body");
    const classes = el.className.split(" ");
    const idx = classes.indexOf(STOP_SCROLL_CLASS);

    if (idx >= 0 && !active) classes.splice(idx, 1);
    if (idx < 0 && active) classes.push(STOP_SCROLL_CLASS);

    el.className = classes.join(" ");
  }

  render() {
    // if (process.env.REACT_APP_SSR) return null;

    const { className, active, onOverlayClick, ...props } = this.props;

    return ReactDOM.createPortal(
      <>
        <DrawerContent
          className={classnames(className, { active })}
          {...props}
        />
        <DrawerOverlay
          className={classnames({ active })}
          onClick={onOverlayClick}
        />
        <DrawerGlobalStyles />
      </>,
      document.body
    );
  }
}
