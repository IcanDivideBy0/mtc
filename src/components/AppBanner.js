import React from "react";
import styled from "styled-components";

import PageContent from "components/PageContent";

const AppBannerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.appBanner.bg};
  color: ${({ theme }) => theme.colors.appBanner.text};
  display: flex;

  @media ${({ theme }) => theme.devices.small.query} {
    height: 300px;
  }
`;

const AppBannerContent = styled(PageContent)`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    margin: calc(${({ theme }) => theme.gridGutter}px / 2) 0;
  }
`;

const AppBannerTitle = styled.h1`
  color: ${({ theme }) => theme.colors.appBanner.title};
  font-size: 1.3em;

  @media ${({ theme }) => theme.devices.small.query} {
    font-size: 2em;
  }
`;

const AppBannerSubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.appBanner.subtitle};
  font-size: 0.8em;

  @media ${({ theme }) => theme.devices.small.query} {
    font-size: 1em;
  }
`;

export default function AppBanner() {
  return (
    <AppBannerWrapper>
      <AppBannerContent padded>
        <AppBannerTitle>
          La Médecine Traditionnelle Chinoise à Nantes
        </AppBannerTitle>
        <AppBannerSubTitle>
          Loïse Holive, votre praticienne en médecine traditionnelle chinoise
          <br />
          Acupuncture, Tuina, Ventouses, Qi-Gong, …
        </AppBannerSubTitle>
      </AppBannerContent>
    </AppBannerWrapper>
  );
}
