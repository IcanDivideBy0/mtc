import React from "react";
import classnames from "classnames";

import { withStyles, Paper } from "@material-ui/core";
import {
  CheckCircle as CheckCircleIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
} from "@material-ui/icons";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    display: "flex",
    borderRadius: theme.shape.borderRadius,

    "&.success": {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
    },

    "&.info": {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
    },

    "&.warning": {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
    },

    "&.error": {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    },
  },
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing.unit * 2,
  },
});

function Message({ classes, type, className, children }) {
  return (
    <Paper className={classnames(classes.root, type, className)}>
      {type === "success" && <CheckCircleIcon color="inherit" />}
      {type === "info" && <InfoIcon color="inherit" />}
      {type === "warning" && <WarningIcon color="inherit" />}
      {type === "error" && <ErrorIcon color="inherit" />}

      <div className={classes.content}>{children}</div>
    </Paper>
  );
}

export default withStyles(styles)(Message);
