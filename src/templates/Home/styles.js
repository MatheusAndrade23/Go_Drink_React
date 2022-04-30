import styled, { css } from 'styled-components';

export const HomeContainer = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    width: 100%;
    background-color: ${theme.colors.fourthColor};
  `}
`;
