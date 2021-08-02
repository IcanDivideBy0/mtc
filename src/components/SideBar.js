import React from "react";

import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Link,
  Divider,
  NoSsr,
} from "@material-ui/core";
import { Phone as PhoneIcon, Email as EmailIcon } from "@material-ui/icons";

import { ADDRESSES, PHONE, EMAIL } from "constants";
import Map from "components/Map";

const useStyles = makeStyles((theme) => ({
  root: {},
  divider: {
    margin: theme.spacing(1, 0),
  },
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

      <NoSsr>
        <Map />
      </NoSsr>

      <CardContent>
        <Typography paragraph component="div">
          {ADDRESSES[0].name}
          <Divider className={classes.divider} />
          {ADDRESSES[0].street}
          <br />
          {ADDRESSES[0].postalCode} {ADDRESSES[0].locality}
          <Divider className={classes.divider} />
          {ADDRESSES[1].street}
          <br />
          {ADDRESSES[1].postalCode} {ADDRESSES[1].locality}
        </Typography>

        <Typography>
          <strong>
            <Link href={`tel:${PHONE}`}>
              <PhoneIcon className={classes.icon} />
              {PHONE}
            </Link>
          </strong>
        </Typography>

        <Typography paragraph>
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
