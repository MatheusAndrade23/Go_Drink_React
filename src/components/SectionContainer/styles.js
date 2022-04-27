import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 1200px;
    padding: ${theme.spacings.large};
    width: 100%;
    background-color: ${theme.colors.fourthColor};
  `}
`;
