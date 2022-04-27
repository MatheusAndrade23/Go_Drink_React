import styled, { css } from 'styled-components';

const TextSize = {
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

const TextCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const TextWeight = (bold) => css`
  font-weight: ${bold ? 'bold' : 'normal'};
`;

export const Button = styled.button`
  ${({ theme, uppercase, bold, size }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    cursor: pointer;
    border-radius: ${theme.spacings.xsmall};
    border: 1px solid ${theme.colors.thirdColor};
    color: ${theme.colors.thirdColor};
    background-color: ${theme.colors.primaryColor};
    transition: ease 0.5s;
    ${TextCase(uppercase)};
    ${TextWeight(bold)};
    ${TextSize[size](theme)}

    &:hover {
      background-color: ${theme.colors.fourthColor};
    }
  `}
`;
