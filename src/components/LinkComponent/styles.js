import styled, { css } from 'styled-components';

const LinkSize = {
  xsmall: (theme) => css`
    font-size: ${theme.fonts.sizes.xsmall};
  `,
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
};

const LinkCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Link = styled.a`
  ${({ theme, uppercase, size }) => css`
    color: ${theme.colors.thirdColor};
    margin: ${theme.spacings.small} 0;
    ${LinkCase(uppercase)};
    ${LinkSize[size](theme)};

    &:hover {
      text-decoration: underline;
    }
  `}
`;
