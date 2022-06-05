import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.secondaryColor};
    border-bottom: 1px solid ${theme.colors.thirdColor};
    z-index: 200;
    /* a {
      min-width: 20%;
      text-align: center;
    } */
  `}
`;
