import React from "react";

import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";
import { Phone as PhoneIcon, Email as EmailIcon } from "@material-ui/icons";

import { ADDRESS, PHONE, EMAIL } from "mtc/constants";
import Map from "mtc/components/Map";

const useStyles = makeStyles(theme => ({
  icon: {
    verticalAlign: "middle",
    fontSize: "1rem",
    margin: theme.spacing(0, 1, 0, 0),
  },
}));

export default function SideBar(props) {
  const classes = useStyles(props);

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

        <Typography>
          <strong>
            <a href={`tel:${PHONE}`}>
              <PhoneIcon className={classes.icon} />
              {PHONE}
            </a>
          </strong>
        </Typography>

        <Typography>
          <strong>
            <a href={`mailto:${EMAIL}`}>
              <EmailIcon className={classes.icon} />
              {EMAIL}
            </a>
          </strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
