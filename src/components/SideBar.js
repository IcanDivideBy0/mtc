import React from "react";
import { openPopupWidget } from "react-calendly";

import {
  useTheme,
  GlobalStyles,
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
  const theme = useTheme();

  return (
    <Card>
      <CardContent>
        <Typography variant="h2">Infos pratiques</Typography>
      </CardContent>

      {/* <CardContent sx={{ textAlign: "center" }}>
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
      </CardContent> */}

      <CardContent sx={{ textAlign: "center" }}>
        <GlobalStyles
          styles={{
            ".calendly-overlay .calendly-popup": {
              width: "100vw",
              height: "100vh",
              maxWidth: "100vw",
              maxHeight: "100vh",
            },
          }}
        />

        <Button
          variant="contained"
          size="large"
          color="secondary"
          startIcon={<CalendarIcon />}
          onClick={() => {
            openPopupWidget({
              url: "https://calendly.com/loise-holive-mtc",
              pageSettings: {
                backgroundColor: "fff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: theme.palette.primary.main.substring(1),
                f: console.log(theme),
                textColor: theme.palette.text.primary.substring(1),
              },
            });
          }}
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
