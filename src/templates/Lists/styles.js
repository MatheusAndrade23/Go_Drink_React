import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.fourthColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    & button {
      width: 150px;
      margin-bottom: 20px;
    }
  `}
`;

export const ReturnLink = styled.a`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.thirdColor};
    top: 10px;
    left: 0px;
    height: 50px;
    width: 50px;
    font-size: ${theme.fonts.sizes.huge};

    &:hover {
      color: ${theme.colors.primaryColor};
    }
  `}
`;

export const DrinksContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    min-height: 100vh;
  `}
`;
