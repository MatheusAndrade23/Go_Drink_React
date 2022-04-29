import styled, { css } from 'styled-components';

const ButtonModel = {
  standard: (theme) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    border-radius: ${theme.spacings.xsmall};
    border: 1px solid ${theme.colors.thirdColor};
    color: ${theme.colors.thirdColor};
    background-color: ${theme.colors.primaryColor};

    &:hover {
      color: ${theme.colors.fourthColor};
    }
  `,
  icon: (theme) => css`
    height: 40px;
    width: 40px;
    color: ${theme.colors.thirdColor};
    border: 1px solid ${theme.colors.thirdColor};
    background-color: ${theme.colors.primaryColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;

    &:hover {
      color: ${theme.colors.fourthColor};
    }
  `,
};

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
  ${({ theme, uppercase, bold, size, model }) => css`
    cursor: pointer;
    ${TextCase(uppercase)};
    ${TextWeight(bold)};
    ${TextSize[size](theme)}
    ${ButtonModel[model](theme)}
  `}
`;
