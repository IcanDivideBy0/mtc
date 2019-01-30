import React from "react";
import { withRouter, matchPath } from "react-router";
import { Link } from "react-router-dom";
import FontFaceObserver from "fontfaceobserver";
import classnames from "classnames";

import {
  withStyles,
  AppBar,
  Tabs,
  Tab,
  Popper,
  ButtonBase,
  Paper,
  Fade,
  Typography,
  Collapse,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

import { compose } from "mtc/utils";
import ContentContainer from "mtc/components/ContentContainer";

const NAV_ITEMS = [
  { label: "Accueil", path: "/", exact: true },
  {
    label: "Soins",
    path: "/soins",
    // items: [
    //   { label: "Acupuncture", path: "/soins/acupuncture" },
    //   { label: "Tuina", path: "/soins/tuina" },
    //   { label: "Ventouses", path: "/soins/ventouses" },
    //   { label: "Qi-Gong", path: "/soins/qi-gong" },
    // ],
  },
  { label: "Tarifs", path: "/tarifs" },
  { label: "Contact", path: "/contact" },
];

/**
 * Desktop nav
 */

const navItemStyles = theme => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    zIndex: 100,

    "$popper & ~ &": {
      borderTop: [[1, "solid", "rgba(0, 0, 0, 0.3)"]],
    },
  },
  button: {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
  },
  popper: {
    display: "flex",
    flexDirection: "column",
    zIndex: 200,

    "& &": {
      paddingTop: 1,
      marginLeft: -1,
    },
  },
  paper: {
    backgroundColor: theme.palette.secondary.main,
  },
});

function _DesktopNavItem({
  location,
  classes,
  navItem,
  isNested,
  className,
  children,
}) {
  const rootRef = React.useRef();
  const [isOver, setIsOver] = React.useState(false);

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
      onClick={() => setIsOver(false)}
      className={classes.root}
    >
      <ButtonBase
        variant="contained"
        color="secondary"
        component={Link}
        to={navItem.path}
        className={classnames(classes.button, className)}
      >
        {children}
      </ButtonBase>

      {navItem.items && (
        <Popper
          open={isOver}
          disablePortal
          placement={isNested ? "right-start" : "bottom-start"}
          className={classes.popper}
          anchorEl={rootRef.current}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper square className={classes.paper}>
                {navItem.items.map(navItem => (
                  <Tab
                    key={navItem.path}
                    value={navItem.path}
                    label={navItem.label}
                    component={DesktopNavItem}
                    navItem={navItem}
                    isNested
                    selected={!!matchPath(location.pathname, navItem)}
                  />
                ))}
              </Paper>
            </Fade>
          )}
        </Popper>
      )}
    </div>
  );
}

const DesktopNavItem = compose(
  withRouter,
  withStyles(navItemStyles)
)(_DesktopNavItem);

/**
 * Mobile nav
 */

const mobileNavItemListStyles = theme => ({
  root: {
    listStyleType: "none",
    padding: 0,
    margin: 0,

    "& &": {
      paddingLeft: theme.spacing.unit * 2,
    },
  },
  item: {
    padding: Object,
    margin: 0,

    borderTop: [[1, "solid", "rgba(0, 0, 0, 0.3)"]],
  },
  link: {
    display: "block",
    textDecoration: "none",
    margin: 0,
    padding: [[theme.spacing.unit, theme.spacing.unit * 2]],

    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
  },
});

function _MobileNavItemList({ classes, navItems }) {
  return (
    <ul className={classes.root}>
      {navItems.map(navItem => (
        <li key={navItem.path} className={classes.item}>
          <ButtonBase
            component={Link}
            to={navItem.path}
            className={classes.link}
          >
            <Typography color="inherit">{navItem.label}</Typography>
          </ButtonBase>

          {navItem.items && <MobileNavItemList navItems={navItem.items} />}
        </li>
      ))}
    </ul>
  );
}

const MobileNavItemList = withStyles(mobileNavItemListStyles)(
  _MobileNavItemList
);

/**
 * Nav bar
 */

const navBarStyles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  main: {
    display: "flex",

    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  tabs: {
    flexGrow: 1,
    overflow: "visible",

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    "@media (hover: none)": {
      display: "none",
    },
  },
  tabsFlexContainer: {
    minHeight: 48,
  },
  tabsScroller: {
    overflow: "visible",
  },
  hiddenTab: {
    display: "none",
  },
  mobileNav: {
    flexGrow: 1,
    margin: [[0, -theme.spacing.unit * 2]],
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("sm")]: {
      "@media (hover: hover)": {
        display: "none",
      },
    },
  },
  mobileMenuButton: {
    height: 48,
    display: "flex",
    justifyContent: "flex-end",
    padding: [[0, theme.spacing.unit * 2]],
  },
  mobileMenuButtonLabel: {
    padding: [[0, theme.spacing.unit * 2]],
    fontWeight: 500,
    textTransform: "uppercase",
    lineHeight: 1.75,
  },
});

function NavBar({ location, history, classes }) {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const toggleMobilenav = () => setMobileNavOpen(open => !open);

  const tabValue = (
    NAV_ITEMS.find(({ path, exact }) =>
      matchPath(location.pathname, { path, exact })
    ) || { path: 0 }
  ).path;

  return (
    <AppBar position="sticky" color="secondary" className={classes.root}>
      <ContentContainer className={classes.main}>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          textColor="inherit"
          classes={{
            root: classes.tabs,
            flexContainer: classes.tabsFlexContainer,
            scroller: classes.tabsScroller,
          }}
          action={actions => {
            const font = new FontFaceObserver("Fira Sans");
            font.load().then(actions.updateIndicator);
          }}
        >
          <Tab value={0} className={classes.hiddenTab} />

          {NAV_ITEMS.map(navItem => (
            <Tab
              key={navItem.path}
              value={navItem.path}
              label={navItem.label}
              component={DesktopNavItem}
              navItem={navItem}
            />
          ))}
        </Tabs>

        {/* Mobile nav */}
        <div className={classes.mobileNav}>
          <ButtonBase
            onClick={toggleMobilenav}
            className={classes.mobileMenuButton}
          >
            <Typography
              color="inherit"
              className={classes.mobileMenuButtonLabel}
            >
              Menu
            </Typography>
            <MenuIcon />
          </ButtonBase>

          <Collapse in={mobileNavOpen}>
            <nav onClick={toggleMobilenav}>
              <MobileNavItemList navItems={NAV_ITEMS} />
            </nav>
          </Collapse>
        </div>
      </ContentContainer>
    </AppBar>
  );
}

export default compose(
  withRouter,
  withStyles(navBarStyles)
)(NavBar);
