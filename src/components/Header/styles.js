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
        top: 2px;
      }

      & div:first-child{
        width: 100%;
        width: max-content;
        margin-bottom: 5px;
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

      & button{
        height: 35px;
        width: 35px;
      }

      & input{
        padding: 5px;
      }
    }
  `}
`;
