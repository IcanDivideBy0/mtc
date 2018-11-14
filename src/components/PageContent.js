import styled, { css } from "styled-components";

const breakpointsCss = ({ theme }) =>
  Object.entries(theme.devices).map(
    ([deviceName, { size, query }]) => css`
      @media ${query} {
        max-width: calc(
          ${size}px - ${theme.gridGutter}px * ${deviceName === "small" ? 2 : 4}
        );
      }
    `
  );

const isPadded = ({ padded }) => (padded ? 1 : 0);

export default styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: calc(100% - ${({ theme }) => theme.gridGutter}px * 2);

  padding: calc(${({ theme }) => theme.gridGutter}px * ${isPadded}) 0;
  @media ${({ theme }) => theme.devices.medium.query} {
    padding: calc(${({ theme }) => theme.gridGutter}px * 2 * ${isPadded}) 0;
  }

  ${breakpointsCss};
`;
