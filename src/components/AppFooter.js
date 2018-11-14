import React from "react";
import styled from "styled-components";

import PageContent from "./PageContent";

const AppFooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.appFooter.bg};
  color: ${({ theme }) => theme.colors.appFooter.text};
  font-size: smaller;

  box-shadow: 0 -4px 5px 0 rgba(0, 0, 0, 0.14),
    0 -1px 10px 0 rgba(0, 0, 0, 0.12), 0 -2px 4px -1px rgba(0, 0, 0, 0.2);
`;

export default function AppFooter() {
  return (
    <AppFooterWrapper>
      <PageContent padded>
        Hello <code>AppFooter</code>!
      </PageContent>
    </AppFooterWrapper>
  );
}
