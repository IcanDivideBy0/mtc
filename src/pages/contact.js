import React from "react";
import { Divider, Stack, Typography, TextField, Button } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";

import { EMAIL } from "constants";

export default function ContactPage() {
  return (
    <form noValidate action={`https://formspree.io/${EMAIL}`} method="POST">
      <Stack spacing={2}>
        <Typography variant="h1">Contact</Typography>

        <Divider />

        <TextField name="name" required label="Nom" fullWidth />

        <TextField name="email" type="email" required label="Email" fullWidth />

        <TextField
          name="message"
          required
          label="Message"
          multiline
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          startIcon={<SendIcon />}
          sx={{ alignSelf: "flex-end" }}
        >
          Envoyer
        </Button>
      </Stack>
    </form>
  );
}
