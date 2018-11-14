import React from "react";
import styled from "styled-components";

import { imageSizes } from "theme";
import PageContent from "components/PageContent";
import Image from "components/Image";

const HomePageContent = styled(PageContent)`
  display: block;

  & > * {
    margin: ${({ theme }) => theme.gridGutter}px 0;

    @media ${({ theme }) => theme.devices.medium.query} {
      margin: calc(${({ theme }) => theme.gridGutter}px * 2) 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }

  @supports (display: grid) {
    display: grid;
    grid-gap: ${({ theme }) => theme.gridGutter}px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "intro"
      "acupuncture"
      "tuina"
      "ventouses"
      "qi-gong"
      "infos";

    & > * {
      margin: initial;
    }

    .intro {
      grid-area: intro;
    }
    .acupuncture {
      grid-area: acupuncture;
    }
    .tuina {
      grid-area: tuina;
    }
    .ventouses {
      grid-area: ventouses;
    }
    .qi-gong {
      grid-area: qi-gong;
    }
    .infos {
      grid-area: infos;
    }

    @media ${({ theme }) => theme.devices.small.query} {
      grid-template-columns: repeat(2, 1fr);

      grid-template-areas:
        "intro intro"
        "acupuncture tuina"
        "ventouses qi-gong"
        "infos infos";
    }

    @media ${({ theme }) => theme.devices.medium.query} {
      grid-gap: calc(${({ theme }) => theme.gridGutter}px * 2);
    }

    @media ${({ theme }) => theme.devices.large.query} {
      grid-template-columns: repeat(4, 1fr);

      grid-template-areas:
        "intro intro intro intro"
        "acupuncture acupuncture acupuncture infos"
        "tuina tuina tuina infos"
        "ventouses ventouses ventouses infos"
        "qi-gong qi-gong qi-gong infos";
    }
  }
`;

const BlockMedia = styled.div`
  width: 100%;
  padding-top: ${({ ratio }) => (1 / ratio) * 100}%;
  position: relative;
  overflow: hidden;

  img,
  .lazyload-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    user-select: none;
  }
`;

const BlockTitle = styled.h1``;
const BlockText = styled.p``;

const Block = styled.article`
  &.card {
    border-radius: 2px;
    overflow: hidden;
    background-color: #f7f4f3;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);

    ${BlockTitle}, ${BlockText} {
      padding: 0 ${({ theme }) => theme.gridGutter}px;
    }
  }

  &:not(.card) {
    & > *:first-child {
      margin-top: 0;
    }
    & > *:last-child {
      margin-bottom: 0;
    }

    ${BlockMedia} {
      border-radius: 2px;
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    }
  }

  @supports (display: grid) {
    @media ${({ theme }) => theme.devices.large.query} {
      &.acupuncture,
      &.tuina,
      &.ventouses,
      &.qi-gong {
        display: grid;
        grid-column-gap: calc(${({ theme }) => theme.gridGutter}px * 2);
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(auto, 1fr);
        grid-template-areas:
          "media . ."
          "media . ."
          "media . ."
          "media . .";

        ${BlockMedia} {
          grid-area: media;
        }

        ${BlockTitle}, ${BlockText} {
          grid-column: span 2;
          padding: 0 16px 0 0;
        }
        ${BlockTitle} {
          margin: 0.3em 0 0.5em;
        }
        ${BlockText} {
          margin: 0 0 0.5em;
        }
      }

      &.tuina,
      &.qi-gong {
        grid-template-areas:
          ". . media"
          ". . media"
          ". . media"
          ". . media";

        ${BlockTitle}, ${BlockText} {
          padding: 0 0 0 16px;
        }
      }
    }
  }
`;

const blockImageSize = imageSizes(
  {
    xLarge: width => Math.floor((width - 32 * 5) / 4) + "px",
    large: width => Math.floor((width - 32 * 5) / 4) + "px",
    medium: width => Math.floor((width - 32 * 3) / 2) + "px",
    small: width => Math.floor((width - 16 * 3) / 2) + "px",
  },
  `calc(100vw - 16px * 2)`
);

export default function HomePage() {
  return (
    <HomePageContent padded>
      <Block className="intro">
        <BlockText>
          Ullamco proident voluptate magna cupidatat. Nulla dolore ullamco
          proident anim ipsum eiusmod non deserunt est ea ut veniam esse. Nisi
          tempor incididunt eiusmod ut ea qui ut ut sunt officia aliqua. Laborum
          fugiat quis voluptate occaecat culpa nulla sit consequat pariatur duis
          eiusmod voluptate veniam excepteur.
        </BlockText>
      </Block>

      <Block className="card acupuncture">
        <BlockMedia ratio={4 / 2}>
          <Image
            lazy
            lazyHeight={200}
            srcSet={[require("./images/acupuncture.jpg") + " 320w"]}
            sizes={blockImageSize}
            src={require("./images/acupuncture.jpg")}
            alt=""
          />
        </BlockMedia>

        <BlockTitle>Acupuncture</BlockTitle>
        <BlockText>
          Incididunt proident elit proident mollit ex sint Lorem reprehenderit
          ea velit Lorem Lorem eiusmod laboris. Aliqua et ea est consectetur
          eiusmod magna esse esse sit.
        </BlockText>
      </Block>

      <Block className="card tuina">
        <BlockMedia ratio={4 / 2}>
          <Image
            lazy
            lazyHeight={200}
            srcSet={[require("./images/tuina.jpg") + " 320w"]}
            sizes={blockImageSize}
            src={require("./images/tuina.jpg")}
            alt=""
          />
        </BlockMedia>

        <BlockTitle>Tuina</BlockTitle>
        <BlockText>
          Irure id non cupidatat adipisicing fugiat labore elit non.
          Exercitation veniam elit elit occaecat. Aliqua labore magna id
          pariatur dolor id minim magna dolor.
        </BlockText>
      </Block>

      <Block className="card ventouses">
        <BlockMedia ratio={4 / 2}>
          <Image
            lazy
            lazyHeight={200}
            srcSet={[require("./images/ventouses.jpg") + " 320w"]}
            sizes={blockImageSize}
            src={require("./images/ventouses.jpg")}
            alt=""
          />
        </BlockMedia>

        <BlockTitle>Ventouses</BlockTitle>
        <BlockText>
          Nulla amet eiusmod dolore quis est enim cillum non duis tempor et
          cupidatat minim. Eiusmod est tempor qui consectetur officia culpa sint
          pariatur ad.
        </BlockText>
      </Block>

      <Block className="card qi-gong">
        <BlockMedia ratio={4 / 2}>
          <Image
            lazy
            lazyHeight={200}
            srcSet={[require("./images/qi-gong.jpg") + " 320w"]}
            sizes={blockImageSize}
            src={require("./images/qi-gong.jpg")}
            alt=""
          />
        </BlockMedia>

        <BlockTitle>Qi-Gong</BlockTitle>
        <BlockText>
          Laborum minim commodo amet commodo aliquip quis quis. Pariatur dolor
          et elit minim magna qui adipisicing. Exercitation voluptate eiusmod
          irure.
        </BlockText>
      </Block>

      <Block className="infos">
        <BlockTitle>Infos</BlockTitle>
        <BlockText>
          Consectetur enim incididunt ut nostrud officia ad magna magna proident
          minim eu aliquip anim. Dolore pariatur duis in qui.
        </BlockText>
      </Block>

      {/* <picture>
          <source
            media="(max-width: 320px)"
            srcSet={require("./images/stock-photo-320.jpg")}
          />
          <source
            media="(min-width: 800px)"
            srcSet={require("./images/stock-photo-800.jpg")}
          />
          <Image
            lazy
            lazyHeight={200}
            src={require("./images/stock-photo-800.jpg")}
            alt="Chris debout tenant sa fille Elva dans ses bras"
            style={{ maxWidth: "100%" }}
          />
        </picture> */}
    </HomePageContent>
  );
}
