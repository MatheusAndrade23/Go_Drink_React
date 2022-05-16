import styled, { css } from 'styled-components';

export const ReturnLink = styled.a`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.thirdColor};
    top: 10px;
    left: 0px;
    height: 50px;
    width: 50px;
    font-size: ${theme.fonts.sizes.huge};

    &:hover {
      color: ${theme.colors.primaryColor};
    }
  `}
`;
