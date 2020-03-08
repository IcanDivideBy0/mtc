import React from "react";

import { makeStyles, Typography } from "@material-ui/core";

import ContentContainer from "mtc/components/ContentContainer";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `
      url(${require("./images/bg.svg")}),
      radial-gradient(
        ellipse at center,
        ${theme.palette.primary.light},
        ${theme.palette.primary.dark}
      )
    `,
    backgroundRepeat: "repeat, no-repeat",
    backgroundPosition: "center center, center center",
    color: theme.palette.primary.contrastText,
    display: "flex",
    height: 300,
  },
  content: {
    flexGrow: 1,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [theme.breakpoints.up("sm")]: {
      paddingRight: 200,
    },
  },
  logo: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",

    [theme.breakpoints.down("xs")]: {
      top: 32,
      transform: "scale(0.5)",
      transformOrigin: "top right",
    },
  },
  title: {
    position: "relative",
    fontWeight: 500,
    textShadow: [[theme.palette.secondary.main, 0, 0, "10px"]],
  },
  subtitle: {
    position: "relative",
    fontWeight: 500,
    textShadow: [[theme.palette.secondary.main, 0, 0, "10px"]],
  },
}));

export default function Banner(props) {
  const classes = useStyles(props);

  return (
    <header className={classes.root}>
      <ContentContainer padded className={classes.content}>
        <img
          src={require("./images/logo.svg")}
          alt="logo"
          className={classes.logo}
        />

        <Typography
          variant="h1"
          component="div"
          color="inherit"
          gutterBottom
          className={classes.title}
        >
          La Médecine Énergétique Chinoise à Nantes
        </Typography>

        <Typography
          variant="h3"
          component="div"
          color="inherit"
          className={classes.subtitle}
        >
          Loïse Holive, votre praticienne en Acupuncture et massage Tuina, pour soulager rapidement vos douleurs et restituer votre bien être.
        </Typography>
      </ContentContainer>
    </header>
  );
}
