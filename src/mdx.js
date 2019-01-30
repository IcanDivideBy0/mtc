import React from "react";
import classnames from "classnames";

import { withStyles, Typography } from "@material-ui/core";

export const H1 = props => <Typography variant="h1" gutterBottom {...props} />;
export const H2 = props => <Typography variant="h2" gutterBottom {...props} />;
export const H3 = props => <Typography variant="h3" gutterBottom {...props} />;
export const H4 = props => <Typography variant="h4" gutterBottom {...props} />;
export const H5 = props => <Typography variant="h5" gutterBottom {...props} />;
export const H6 = props => <Typography variant="h6" gutterBottom {...props} />;

export const Paragraph = props => <Typography paragraph {...props} />;

const srongStyles = theme => ({
  root: {
    color: theme.palette.primary.dark,
  },
});
const _Strong = ({ classes, className, ...props }) => (
  <strong className={classnames(classes.root, className)} {...props} />
);
export const Strong = withStyles(srongStyles)(_Strong);

const unorderedListStyles = theme => ({
  root: {
    color: "red",
  },
});
const _UnorderedList = ({ classes, className, ...props }) => (
  <Typography
    component="ul"
    paragraph
    className={classnames(classes.root, className)}
    {...props}
  />
);
export const UnorderedList = withStyles(unorderedListStyles)(_UnorderedList);

const listItemStyles = theme => ({
  root: {
    display: "list-item",
  },
});
const _ListItem = ({ classes, className, ...props }) => (
  <Typography
    component="li"
    className={classnames(classes.root, className)}
    {...props}
  />
);
export const ListItem = withStyles(listItemStyles)(_ListItem);

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
};
