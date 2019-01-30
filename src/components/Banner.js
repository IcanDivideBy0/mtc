import React from "react";

import { withStyles, Typography } from "@material-ui/core";

import ContentContainer from "mtc/components/ContentContainer";

const styles = theme => ({
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
    color: theme.palette.primary.contrastText,
    display: "flex",

    [theme.breakpoints.up("sm")]: {
      height: 300,
    },
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    textShadow: [[theme.palette.secondary.main, 0, 0, "10px"]],
  },
  subtitle: {
    fontWeight: 500,
    textShadow: [[theme.palette.secondary.main, 0, 0, "10px"]],
  },
});

function Banner({ classes }) {
  return (
    <div className={classes.root}>
      <ContentContainer padded className={classes.content}>
        <Typography
          variant="h1"
          component="div"
          color="inherit"
          gutterBottom
          className={classes.title}
        >
          La Médecine Traditionnelle Chinoise à Nantes
        </Typography>

        <Typography
          paragraph
          color="inherit"
          gutterBottom
          className={classes.subtitle}
        >
          Loïse Holive, votre praticienne en médecine traditionnelle chinoise
          <br />
          Acupuncture, Tuina, Ventouses, Qi-Gong, …
        </Typography>
      </ContentContainer>
    </div>
  );
}

export default withStyles(styles)(Banner);
