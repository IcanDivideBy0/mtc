import React from "react";
import clsx from "clsx";

import { makeStyles, Typography, Divider } from "@material-ui/core";

export const H1 = (props) => (
  <Typography variant="h1" gutterBottom {...props} />
);
export const H2 = (props) => (
  <Typography variant="h2" gutterBottom {...props} />
);
export const H3 = (props) => (
  <Typography variant="h3" gutterBottom {...props} />
);
export const H4 = (props) => (
  <Typography variant="h4" gutterBottom {...props} />
);
export const H5 = (props) => (
  <Typography variant="h5" gutterBottom {...props} />
);
export const H6 = (props) => (
  <Typography variant="h6" gutterBottom {...props} />
);

export const Paragraph = (props) => <Typography paragraph {...props} />;

/**
 * <strong>
 */

const useStrongStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
}));

export function Strong({ className, ...props }) {
  const classes = useStrongStyles(props);
  return <strong className={clsx(className, classes.root)} {...props} />;
}

/**
 * <ul>
 */

export function UnorderedList(props) {
  return <Typography component="ul" paragraph {...props} />;
}

/**
 * <li>
 */

export function ListItem(props) {
  return <Typography component="li" {...props} />;
}

/**
 * <hr />
 */

const useHorizontalRuleStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
  },
}));

export function HorizontalRule(props) {
  const classes = useHorizontalRuleStyles(props);
  return <Divider {...props} classes={classes} />;
}

export default {
  wrapper: React.Fragment,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  strong: Strong,
  ul: UnorderedList,
  li: ListItem,
  hr: HorizontalRule,
};
