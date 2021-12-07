import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Link,
  Divider,
  NoSsr,
  Button,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  CalendarToday as CalendarIcon,
} from "@mui/icons-material";

import { ADDRESSES, PHONE, EMAIL } from "constants";
import Map from "components/Map";

export default function SideBar() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2">Infos pratiques</Typography>
      </CardContent>

      <CardContent sx={{ textAlign: "center" }}>
        <Button
          component="a"
          href="https://www.crenolib.fr/prendre-rdv/21708_holive-loise"
          variant="contained"
          size="large"
          color="secondary"
          startIcon={<CalendarIcon />}
        >
          Prendre RDV
        </Button>
      </CardContent>

      <NoSsr>
        <Map />
      </NoSsr>

      <CardContent>
        <Typography paragraph component="div">
          {ADDRESSES[0].name}
          <Divider sx={{ m: (t) => t.spacing(1, 0) }} />
          {ADDRESSES[0].street}
          <br />
          {ADDRESSES[0].postalCode} {ADDRESSES[0].locality}
          <Divider sx={{ m: (t) => t.spacing(1, 0) }} />
          {ADDRESSES[1].street}
          <br />
          {ADDRESSES[1].postalCode} {ADDRESSES[1].locality}
        </Typography>

        <Typography>
          <strong>
            <Link href={`tel:${PHONE}`}>
              <PhoneIcon
                sx={{
                  fontSize: "1rem",
                  m: (t) => t.spacing(0, 1, 0, 0),
                  verticalAlign: "middle",
                }}
              />
              {PHONE}
            </Link>
          </strong>
        </Typography>

        <Typography paragraph>
          <strong>
            <Link href={`mailto:${EMAIL}`}>
              <EmailIcon
                sx={{
                  fontSize: "1rem",
                  m: (t) => t.spacing(0, 1, 0, 0),
                  verticalAlign: "middle",
                }}
              />
              {EMAIL}
            </Link>
          </strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
