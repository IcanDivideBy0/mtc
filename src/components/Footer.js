import React from "react";

import { Paper } from "@mui/material";

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
    ></Paper>
  );
}
