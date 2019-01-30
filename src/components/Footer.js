import React from "react";

import { withStyles, Paper, Typography } from "@material-ui/core";

import ContentContainer from "mtc/components/ContentContainer";

const styles = theme => ({
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
});

function Footer({ classes }) {
  return (
    <Paper square className={classes.root}>
      <ContentContainer padded>
        <Typography color="inherit">
          Hello <code>Footer</code>!
        </Typography>
      </ContentContainer>
    </Paper>
  );
}

export default withStyles(styles)(Footer);
