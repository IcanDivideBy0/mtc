import React from "react";

import { Link, Container, Paper, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Paper
      square
      sx={{
        background: (t) => `
        url("/images/background.svg"),
        radial-gradient(
          ellipse at center,
          ${t.palette.secondary.light},
          ${t.palette.secondary.dark}
        )
      `,
        backgroundRepeat: "repeat, no-repeat",
        color: "secondary.contrastText",
      }}
    >
      <Container fixed sx={{ padding: [2, 3] }}>
        <Typography variant="h3" gutterBottom>
          Liens amis
        </Typography>

        <Typography color="inherit">
          Vous pensez que l’acupuncture n’est pas l’outil pour vous, voici
          d’autres spécialistes qui pourront vous aider:
          <ul>
            <li>
              <Link
                href="http://www.music-kinesio.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jeanne Henry
              </Link>{" "}
              (Kinesiologue)
            </li>
            <li>
              <Link
                href="https://app.kiute.com/klyona/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marine Bossé
              </Link>{" "}
              (Guide / Magnétiseuse)
            </li>
            <li>
              <Link
                href="http://osteo-barbo.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mélanie Barbo
              </Link>{" "}
              (Ostéopathe)
            </li>
          </ul>
        </Typography>
      </Container>
    </Paper>
  );
}
