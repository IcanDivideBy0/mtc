import React from "react";
import classnames from "classnames";

import { withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    margin: "0 auto",
    maxWidth: `calc(100% - ${theme.spacing.unit * 2}px * 2)`,

    ...["sm", "md", "lg"].reduce(
      (acc, key) => ({
        ...acc,
        [theme.breakpoints.up(key)]: {
          maxWidth: `calc(
            ${theme.breakpoints.values[key]}px -
            ${theme.spacing.unit * 4}px * 2
          )`,
        },
      }),
      {}
    ),
  },
  padded: {
    padding: [[theme.spacing.unit * 2, 0]],

    [theme.breakpoints.up("sm")]: {
      padding: [[theme.spacing.unit * 4, 0]],
    },
  },
});

function ContentContainer({
  component: Component = "div",
  classes,
  padded,
  className,
  ...props
}) {
  return (
    <Component
      className={classnames(
        classes.root,
        { [classes.padded]: padded },
        className
      )}
      {...props}
    />
  );
}

export default withStyles(styles)(ContentContainer);
