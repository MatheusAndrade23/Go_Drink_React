import styled, { css } from 'styled-components';

export const Menu = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 2px solid ${theme.colors.primaryColor};
    background-color: ${theme.colors.secondaryColor};
    padding: ${theme.spacings.xsmall} ${theme.spacings.huge};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  `}
`;
