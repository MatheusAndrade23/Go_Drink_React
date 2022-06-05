import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.secondaryColor};
    border-bottom: 1px solid ${theme.colors.thirdColor};
    z-index: 200;

    @media ${theme.media.smallScreen} {
      & input{
        width: 80%;
      }
    }

    @media ${theme.media.xsmallScreen} {
      flex-direction: column;
      align-items: flex-start;

      & > a{
        position: absolute;
        right: 10px;
        top: 5px;
      }

      & div:first-child{
        align-self: flex-start;
        width: max-content;
      }

      & div{
        align-self: flex-start;
        width: 100%;

      }
    }

    @media ${theme.media.xxsmallScreen} {
      & div:first-child{

        & p{
          font-size: ${theme.fonts.sizes.medium};
        }
      }

    }
  `}
`;
