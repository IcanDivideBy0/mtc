import React from "react";
// import { FORM_ERROR } from "final-form";
import { Form } from "react-final-form";

import { Grid, Typography } from "@material-ui/core";
import { Send as SendIcon } from "@material-ui/icons";

import { EMAIL } from "mtc/constants";
import TextField from "mtc/components/TextField";
import Message from "mtc/components/Message";
import ProgressButton from "mtc/components/ProgressButton";

export default function ContactPage({ classes }) {
  return (
    <Form
      onSubmit={async values => {
        // try {
        //   const formData = new FormData();
        //   formData.append("name", values.name);
        //   formData.append("email", values.email);
        //   formData.append("message", values.message);
        //   const url = `https://formspree.io/${EMAIL}`;
        //   await fetch(url, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type":
        //         "application/x-www-form-urlencoded ; charset=UTF-8",
        //     },
        //     body: formData,
        //   });
        // } catch (error) {
        //   return { [FORM_ERROR]: error.toString() };
        // }
      }}
    >
      {({ handleSubmit, submitting, submitError, submitSucceeded }) => (
        <form
          // onSubmit={handleSubmit}
          noValidate
          action={`https://formspree.io/${EMAIL}`}
          method="POST"
        >
          <Grid container spacing={16} justify="flex-end">
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

            {submitError && (
              <Grid item xs={12}>
                <Message type="error">
                  <Typography color="inherit">{submitError}</Typography>
                </Message>
              </Grid>
            )}

            {submitSucceeded && (
              <Grid item xs={12}>
                <Message type="success">
                  <Typography color="inherit">
                    Votre message a bien été envoyé !
                  </Typography>
                </Message>
              </Grid>
            )}

            <Grid item>
              <ProgressButton
                type="submit"
                variant="contained"
                color="secondary"
                progress={submitting}
                Icon={SendIcon}
              >
                Envoyer
              </ProgressButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Form>
  );
}
