import React from "react";

import { withStyles, Card, CardContent, Typography } from "@material-ui/core";
import { Phone as PhoneIcon, Email as EmailIcon } from "@material-ui/icons";

import { ADDRESS, PHONE, EMAIL } from "mtc/constants";
import Map from "mtc/components/Map";

const styles = theme => ({
  link: {
    textDecoration: "none",
  },
  icon: {
    verticalAlign: "middle",
    fontSize: "1.2em",
    margin: [[0, "0.5em", 0, 0]],
  },
});

function SideBar({ classes }) {
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h2">Infos pratiques</Typography>
      </CardContent>

      <Map />

      <CardContent>
        <Typography paragraph>
          {ADDRESS.name}
          <br />
          {ADDRESS.street}
          <br />
          {ADDRESS.postalCode} {ADDRESS.locality}
        </Typography>

        <Typography
          component="a"
          href={`tel:${PHONE}`}
          className={classes.link}
        >
          <PhoneIcon className={classes.icon} />
          {PHONE}
        </Typography>

        <Typography
          component="a"
          href={`tel:${EMAIL}`}
          className={classes.link}
        >
          <EmailIcon className={classes.icon} />
          {EMAIL}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(SideBar);
