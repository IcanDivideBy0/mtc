import React from "react";

import { makeStyles, Container, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `
      url("/images/background.svg"),
      radial-gradient(
        ellipse at center,
        ${theme.palette.secondary.light},
        ${theme.palette.secondary.dark}
      )
    `,
    backgroundRepeat: "repeat, no-repeat",
    color: theme.palette.secondary.contrastText,
  },
  content: {
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles(props);

  return (
    <Paper square className={classes.root}>
      <Container fixed className={classes.content}>
        <Typography color="inherit"></Typography>
      </Container>
    </Paper>
  );
}
