import styled, { css } from 'styled-components';

export const HomeContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.fourthColor};
  `}
`;
export const DrinksContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  `}
`;
