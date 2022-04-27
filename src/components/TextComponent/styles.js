import styled, { css } from 'styled-components';

const TextCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Text = styled.p`
  ${({ theme, uppercase }) => css`
    color: ${theme.colors.primaryColor};
    font-size: ${theme.fonts.sizes.medium};
    margin: ${theme.spacings.small} 0;
    ${TextCase(uppercase)};
  `}
`;
