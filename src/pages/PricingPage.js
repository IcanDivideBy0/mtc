import React from "react";

import { withTheme } from "@material-ui/core";

import ContentContainer from "mtc/components/ContentContainer";
import Content from "./PricingPage.mdx";

function PricingPage({ theme }) {
  return (
    <ContentContainer padded>
      <Content components={theme.mdxComponents} />
    </ContentContainer>
  );
}

export default withTheme()(PricingPage);
