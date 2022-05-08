import styled, { css } from 'styled-components';

export const HomeContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.fourthColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    width: max-content;
    font-size: ${theme.fonts.sizes.xlarge};
    font-family: ${theme.fonts.family.secondary};
    margin-top: ${theme.spacings.huge};
  `}
`;

export const LinksContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  `}
`;

export const RandomDrinks = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 30px;
  `}
`;
