import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: ${theme.colors.fourthColor};
    border-top: 2px solid ${theme.colors.primaryColor};
    padding: ${theme.spacings.medium};

    & a {
      margin: 0;
    }

    & p {
      margin-left: ${theme.spacings.small};
    }
  `}
`;
