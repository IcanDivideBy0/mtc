import React from "react";

import { makeStyles, Container, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `
      url("/images/background.svg"),
      radial-gradient(
        ellipse at center,
        ${theme.palette.primary.light},
        ${theme.palette.primary.dark}
      )
    `,
    backgroundRepeat: "repeat, no-repeat",
    backgroundPosition: "center center, center center",
    color: theme.palette.primary.contrastText,
  },
  content: {
    height: 300,
    position: "relative",
    display: "flex",
    alignItems: "center",

    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
    },
  },
  title: {
    fontWeight: 500,
    textShadow: [[theme.palette.secondary.main, 0, 0, "10px"]],
  },
  subtitle: {
    fontWeight: 500,
    textShadow: [[theme.palette.secondary.main, 0, 0, "10px"]],
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      transform: "scale(0.5)",
      transformOrigin: "top right",
    },
  },
}));

export default function Banner(props) {
  const classes = useStyles(props);

  return (
    <header className={classes.root}>
      <Container fixed className={classes.content}>
        <Grid container alignItems="center">
          <Grid item xs>
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
              Loïse Holive, votre praticienne en Acupuncture et massage Tuina,
              pour soulager rapidement vos douleurs et restituer votre bien
              être.
            </Typography>
          </Grid>

          <Grid item>
            <img src="/images/logo.svg" alt="logo" className={classes.logo} />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}
