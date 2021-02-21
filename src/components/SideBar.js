import React from "react";

import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Link,
} from "@material-ui/core";
import { Phone as PhoneIcon, Email as EmailIcon } from "@material-ui/icons";

import { ADDRESS, PHONE, EMAIL } from "constants";
import Map from "components/Map";

const useStyles = makeStyles((theme) => ({
  root: {},
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
            <Link href={`tel:${PHONE}`}>
              <PhoneIcon className={classes.icon} />
              {PHONE}
            </Link>
          </strong>
        </Typography>

        <Typography>
          <strong>
            <Link href={`mailto:${EMAIL}`}>
              <EmailIcon className={classes.icon} />
              {EMAIL}
            </Link>
          </strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
