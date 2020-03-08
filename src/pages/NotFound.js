import React from "react";

import { Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

export default function NotFoundPage() {
  return (
    <Alert severity="error">
      <Typography color="inherit">Page introuvable.</Typography>
    </Alert>
  );
}
