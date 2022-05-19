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
    position: relative;

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

export const Favorite = styled.button`
  ${({ theme }) => css`
      position: absolute;
      background-color: transparent;
      border: none;
      color: #EEAD2D;
      font-size: 35px;
      right: 10px;
      cursor: pointer;
      transition: 0.5s;

      &:hover{
        transform: scale(1.1);
        color: yellow;
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

export const Drink = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.colors.fourthColor};
    padding: ${theme.spacings.huge};
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  `}
`;
