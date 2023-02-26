import React from "react";
import Image from "next/legacy/image";

import { Box, Container, Grid, Typography } from "@mui/material";

export default function Banner() {
  return (
    <Box
      component="header"
      sx={{
        backgroundImage: (theme) => `
          url("/images/background.svg"),
          radial-gradient(
            ellipse at center,
            ${theme.palette.primary.light},
            ${theme.palette.primary.dark}
          )
        `,
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "center center, center center",
        color: "primary.contrastText",
      }}
    >
      <Container
        fixed
        sx={{
          height: 300,
          p: [2, 3],
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography
              variant="h1"
              component="div"
              color="inherit"
              gutterBottom
              sx={{
                fontWeight: 500,
                textShadow: (theme) =>
                  `${theme.palette.secondary.main} 0 0 10px`,
              }}
            >
              La Médecine Énergétique Chinoise à Nantes
            </Typography>

            <Typography
              variant="h3"
              component="div"
              color="inherit"
              sx={{
                fontWeight: 500,
                textShadow: (theme) =>
                  `${theme.palette.secondary.main} 0 0 10px`,
                maxWidth: { lg: "80%" },
              }}
            >
              Loïse Holive, votre praticienne en acupuncture, pour soulager
              rapidement vos douleurs et restituer votre bien être.
            </Typography>
          </Grid>

          <Grid item sx={{ display: { xs: "none", sm: "initial" } }}>
            <Image
              src="/images/logo.svg"
              alt=""
              width="188"
              height="151"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
