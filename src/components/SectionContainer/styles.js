import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    width: 100%;
    padding: ${theme.spacings.medium} ${theme.spacings.huge};
    width: 100%;
    background-color: ${theme.colors.fourthColor};
  `}
`;
