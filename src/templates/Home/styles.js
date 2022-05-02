import styled, { css } from 'styled-components';

export const HomeContainer = styled.section`
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
