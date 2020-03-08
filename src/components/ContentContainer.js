import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: "0 auto",
    maxWidth: `calc(100% - ${theme.spacing(4)}px)`,

    ...["sm", "md", "lg"].reduce(
      (acc, key) => ({
        ...acc,
        [theme.breakpoints.up(key)]: {
          maxWidth: `calc(
            ${theme.breakpoints.values[key]}px -
            ${theme.spacing(16)}px
          )`,
        },
      }),
      {}
    ),
  },
  padded: {
    padding: theme.spacing(2, 0),

    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4, 0),
    },
  },
}));

export default function ContentContainer({
  component: Component = "div",
  padded,
  className,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <Component
      className={clsx(
        classes.root,
        { [classes.padded]: padded },
        className
      )}
      {...props}
    />
  );
}
