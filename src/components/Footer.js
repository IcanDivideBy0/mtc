import React from "react";

import { makeStyles, Paper, Typography } from "@material-ui/core";

import ContentContainer from "mtc/components/ContentContainer";

const useStyles = makeStyles(theme => ({
  root: {
    background: `
      url(${require("./images/bg.svg")}),
      radial-gradient(
        ellipse at center,
        ${theme.palette.secondary.light},
        ${theme.palette.secondary.dark}
      )
    `,
    backgroundRepeat: "repeat, no-repeat",
    color: theme.palette.secondary.contrastText,
  },
}));

export default function Footer(props) {
  const classes = useStyles(props);

  return (
    <Paper square className={classes.root}>
      <ContentContainer padded>
        <Typography color="inherit" />
      </ContentContainer>
    </Paper>
  );
}
