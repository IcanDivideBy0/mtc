import React from "react";

import { Container, Paper, Typography } from "@mui/material";

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
        <Typography color="inherit"></Typography>
      </Container>
    </Paper>
  );
}
