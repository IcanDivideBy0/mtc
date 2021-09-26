import React from "react";

import { Box, Typography, Divider } from "@mui/material";

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

export function Strong(props) {
  return <Box component="strong" sx={{ color: "primary.main" }} {...props} />;
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

export function HorizontalRule(props) {
  return <Divider sx={{ m: (t) => t.spacing(2, 0) }} {...props} />;
}

const components = {
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

export default components;
