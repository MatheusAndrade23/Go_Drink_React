import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${theme.colors.fourthColor};
    border-top: 2px solid ${theme.colors.primaryColor};
    padding: ${theme.spacings.medium};
    position: relative;
    text-align: left;

    & a {
      margin: 0;
    }

    & p {
      margin: ${theme.spacings.xsmall} ${theme.spacings.small};
    }
  `}
`;

export const GoTop = styled.a`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.primaryColor};
    right: 30px;
    top: -12px;
    font-size: 40px;
  `}
`;

export const FooterLogo = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.secondary};
    color: ${theme.colors.thirdColor};
    font-size: 20px;
    font-weight: bold;
  `}
`;

export const SocialMedia = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};

    & svg {
      font-size: 35px;
      margin-left: 15px;
    }
  `}
`;
