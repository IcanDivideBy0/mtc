import React from "react";
import { withStyles, Button, CircularProgress } from "@material-ui/core";

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit,
  },
});

function ProgressButton({
  classes,
  progress,
  Icon,
  disabled,
  children,
  ...props
}) {
  return (
    <Button {...props} disabled={disabled || progress}>
      {progress ? (
        <CircularProgress size="1em" color="inherit" className={classes.icon} />
      ) : (
        Icon && <Icon className={classes.icon} />
      )}

      {children}
    </Button>
  );
}

export default withStyles(styles)(ProgressButton);
