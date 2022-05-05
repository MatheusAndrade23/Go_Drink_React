import styled, { css } from 'styled-components';

export const List = styled.ul`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} ${theme.spacings.small}
      ${theme.spacings.small} 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & li {
      color: ${theme.colors.primaryColor};
      margin-bottom: 5px;
    }
  `}
`;

export const Instructions = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.primaryColor};
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    width: 50%;
    display: flex;
    flex-direction: column;

    & span {
      font-weight: bold;
      padding: 4px;
      border-radius: 10px;
      margin-top: ${theme.spacings.small};
      margin-right: ${theme.spacings.small};
      color: ${theme.colors.fourthColor};
      background-color: ${theme.colors.primaryColor};
    }

    & h6 {
      margin-bottom: 10px;
    }
  `}
`;

export const DrinkImg = styled.img`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primaryColor};
    height: 400px;
    width: 400px;
  `}
`;

export const ReturnLink = styled.a`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.thirdColor};
    top: 0px;
    left: 0px;
    font-size: ${theme.fonts.sizes.huge};

    &:hover {
      color: ${theme.colors.primaryColor};
    }
  `}
`;

export const Drink = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.colors.fourthColor};
    padding: ${theme.spacings.huge};
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  `}
`;
