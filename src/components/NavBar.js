import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FontFaceObserver from "fontfaceobserver";

import {
  AppBar,
  Box,
  ButtonBase,
  Collapse,
  Container,
  Fade,
  Paper,
  Popper,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

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
  { label: "Ma pratique", path: "/ma-pratique" },
  { label: "Préparatifs", path: "/preparatifs" },
  { label: "FAQ", path: "/faq" },
  { label: "Tarifs et infos", path: "/tarifs" },
  { label: "Contact", path: "/contact" },
];

/**
 * Desktop nav
 */

// eslint-disable-next-line react/display-name
const DesktopNavItem = React.forwardRef(
  ({ navItem, isNested, className, children }, ref) => {
    const router = useRouter();

    let rootRef = React.useRef();
    const [isOver, setIsOver] = React.useState(false);

    return (
      <Box
        ref={(r) => {
          rootRef.current = r;
          if (typeof ref === "function") ref(r);
        }}
        onMouseEnter={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
        onClick={() => setIsOver(false)}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          zIndex: 100,

          "& ~ &": {
            borderTop: isNested ? "1px solid rgba(0, 0, 0, 0.3)" : "none",
          },
        }}
      >
        <ButtonBase
          component={Link}
          href={navItem.path}
          variant="contained"
          color="secondary"
          sx={{
            color: "#fff !important",
            ":hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
          }}
          className={className}
        >
          {children}
        </ButtonBase>

        {navItem.items && (
          <Popper
            open={isOver}
            placement={isNested ? "right-start" : "bottom-start"}
            sx={{
              display: "flex",
              flexDirection: "column",
              zIndex: 200,

              "& &": {
                paddingTop: 1,
                marginLeft: -1,
              },
            }}
            anchorEl={rootRef.current}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper square sx={{ backgroundColor: "secondary.main" }}>
                  {navItem.items.map((item) => {
                    const selected = item.exact
                      ? item.path === router.pathname
                      : router.pathname.indexOf(item.path) === 0;

                    return (
                      <Tab
                        key={item.path}
                        value={item.path}
                        label={item.label}
                        component={DesktopNavItem}
                        navItem={item}
                        isNested
                        selected={selected}
                      />
                    );
                  })}
                </Paper>
              </Fade>
            )}
          </Popper>
        )}
      </Box>
    );
  }
);

/**
 * Mobile nav
 */

function MobileNavItemList({ navItems }) {
  return (
    <Box
      component="ul"
      sx={{
        listStyleType: "none",
        padding: 0,
        margin: 0,
        "& &": { paddingLeft: 2 },
      }}
    >
      {navItems.map((navItem) => (
        <Box
          key={navItem.path}
          component="li"
          sx={{
            margin: 0,
            borderTop: "1px solid rgba(0, 0, 0, 0.3)",
          }}
        >
          <Link href={navItem.path} passHref>
            <ButtonBase
              component="a"
              sx={{
                display: "block",
                textDecoration: "none",
                margin: 0,
                padding: (t) => t.spacing(1, 2),
                ":hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
              }}
            >
              <Typography color="inherit">{navItem.label}</Typography>
            </ButtonBase>
          </Link>

          {navItem.items && <MobileNavItemList navItems={navItem.items} />}
        </Box>
      ))}
    </Box>
  );
}

/**
 * Nav bar
 */

export default function NavBar() {
  const router = useRouter();

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const toggleMobilenav = () => setMobileNavOpen((open) => !open);

  const tabValue = (
    NAV_ITEMS.find(({ path, exact }) =>
      exact ? path === router.pathname : router.pathname.indexOf(path) === 0
    ) || { path: 0 }
  ).path;

  return (
    <AppBar
      position="sticky"
      color="secondary"
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Container fixed sx={{ display: "flex" }}>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          textColor="inherit"
          sx={{
            flexGrow: 1,
            overflow: "visible",
            display: { xs: "none", md: "flex" },
            "@media (hover: none)": { display: "none" },
          }}
          action={(ref) => {
            if (!ref) return;
            const font = new FontFaceObserver("Fira Sans");
            font.load().then(ref.updateIndicator).catch(console.error);
          }}
        >
          <Tab value={0} sx={{ minWidth: 0, padding: 0 }} />

          {NAV_ITEMS.map((navItem) => (
            <Tab
              key={navItem.path}
              value={navItem.path}
              label={navItem.label}
              component={DesktopNavItem}
              navItem={navItem}
              sx={{ minWidth: { xs: 80, md: "initial" } }}
            />
          ))}
        </Tabs>

        {/* Mobile nav */}
        <Box
          sx={{
            flexGrow: 1,
            m: (t) => t.spacing(0, -2),
            display: "flex",
            flexDirection: "column",

            "@media (hover: hover)": {
              display: { md: "none" },
            },
          }}
        >
          <ButtonBase
            onClick={toggleMobilenav}
            sx={{
              height: 48,
              display: "flex",
              justifyContent: "flex-end",
              p: (t) => t.spacing(0, 2),
            }}
          >
            <Typography
              color="inherit"
              sx={{
                p: (t) => t.spacing(0, 2),
                fontWeight: 500,
                textTransform: "uppercase",
                lineHeight: 1.75,
              }}
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
        </Box>
      </Container>
    </AppBar>
  );
}
