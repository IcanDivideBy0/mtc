import React from "react";
import { Field } from "react-final-form";

import { TextField as MuiTextField } from "@material-ui/core";

function TextInput({ input, meta, ...props }) {
  const error = meta.touched && (meta.error || meta.submitError);

  const helperText =
    meta.touched && (meta.error || meta.submitError)
      ? meta.error || meta.submitError
      : props.helperText;

  return (
    <MuiTextField
      {...input}
      {...props}
      helperText={helperText}
      error={!!error}
    />
  );
}

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function TextField({ type, ...props }) {
  return (
    <Field
      type={type}
      component={TextInput}
      validate={(value, ...args) => {
        if (props.required && value == null) {
          return "Ce champ est obligatoire";
        }

        if (type === "email" && !EMAIL_REGEX.test(value))
          return "L’adresse email est invalide";
      }}
      parse={null}
      {...props}
    />
  );
}

TextField.defaultProps = { type: "text" };
