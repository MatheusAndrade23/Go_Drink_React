import styled, { css } from 'styled-components';

export const HomeContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.fourthColor};
  `}
`;
