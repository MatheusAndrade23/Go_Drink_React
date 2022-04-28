import styled, { css } from 'styled-components';

const TextWeight = (bold) => css`
  font-weight: ${bold ? 'bold' : 'normal'};
`;

export const Menu = styled.ul`
  ${({ theme, bold }) => css`
    display: flex;
    flex-direction: row;
    margin: ${theme.spacings.xsmall} ${theme.spacings.medium};

    & > li {
      padding: 10px;
      position: relative;
      ${TextWeight(bold)};

      & > a {
        color: ${theme.colors.thirdColor};

        &::after {
          content: ' ';
          width: 0%;
          height: 2px;
          position: absolute;
          bottom: 0%;
          left: 50%;
          border-radius: ${theme.spacings.xsmall};
          transition: all 200ms ease;
          background-color: ${theme.colors.thirdColor};
        }

        &:hover::after {
          left: 0%;
          width: 100%;
        }
      }
    }
  `}
`;
