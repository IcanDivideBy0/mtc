import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";

import { EMAIL } from "constants";

export default function ContactPage() {
  return (
    <form noValidate action={`https://formspree.io/${EMAIL}`} method="POST">
      <Grid container justifyContent="flex-end">
        <Grid item xs={12}>
          <Typography variant="h1">Contact</Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField name="name" required label="Nom" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="email"
            type="email"
            required
            label="Email"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="message"
            required
            label="Message"
            multiline
            fullWidth
          />
        </Grid>

        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            startIcon={<SendIcon />}
          >
            Envoyer
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
