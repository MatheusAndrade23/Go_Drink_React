import styled, { css } from 'styled-components';

export const Logo = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.thirdColor};
    font-family: ${theme.fonts.family.secondary};
    font-weight: bold;
    text-align: center;
    font-size: ${theme.fonts.sizes.large};
  `}
`;

export const LogoImg = styled.img`
  ${({ theme }) => css`
    height: 100px;
  `}
`;
