import styled, { css } from 'styled-components';

export const Logo = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.thirdColor};
    font-family: ${theme.fonts.family.secondary};
    font-weight: bold;
    text-align: center;
    font-size: ${theme.fonts.sizes.large};

    @media ${theme.media.lteMedium} {
      & p{
        display: none;
      }
    }
    @media ${theme.media.xsmallScreen} {
      & p{
        display: block;
      }
    }
  `}
`;

export const SmallText = styled.span`
  ${({ theme }) => css`
    display: none;
    @media ${theme.media.lteMedium} {
      display: block
    }
    @media ${theme.media.xsmallScreen} {
      display: none;
    }
  `}
`;

export const LogoImg = styled.img`
  ${({ theme }) => css`
    height: 100px;
  `}
`;
