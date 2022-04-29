import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: ${theme.spacings.small} ${theme.spacings.huge};
    background-color: ${theme.colors.secondaryColor};
    border-bottom: 1px solid ${theme.colors.thirdColor};
  `}
`;
