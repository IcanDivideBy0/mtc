import styled, { css } from "styled-components";

export default styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: calc(100vw - ${({ theme }) => theme.gridGutter * 2}px)
    ${({ fullWidth }) => fullWidth && "!important"};

  ${({ theme }) =>
    theme.breakpoints.map(
      breakpoint => css`
        @media screen and (min-width: ${breakpoint}px) {
          max-width: calc(
            ${breakpoint}px - ${({ theme }) => theme.gridGutter * 2}px
          );
        }
      `
    )};
`;
