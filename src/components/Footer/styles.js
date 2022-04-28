import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: ${theme.colors.fourthColor};
    border-top: 2px solid ${theme.colors.primaryColor};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
  `}
`;
