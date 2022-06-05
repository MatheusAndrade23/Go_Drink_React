import styled, { css } from 'styled-components';

export const Menu = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 2px solid ${theme.colors.primaryColor};
    background-color: ${theme.colors.secondaryColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    & div.rec-carousel-wrapper{
      padding: ${theme.spacings.small};
      align-items: center;
    }

    & button.rec-arrow {
      background-color: ${theme.colors.primaryColor} !important;
      color: ${theme.colors.fourthColor} !important;
      display: none;

      &:disabled{
        cursor: pointer;
        visibility: hidden;
      }

      &:hover{
        background-color: ${theme.colors.thirdColor} !important;
      }

      @media ${theme.media.mediumScreen} {
        display: block;
      }
    }

    & button.rec-dot {

      &.rec-dot_active {
        background-color: ${theme.colors.thirdColor} !important;
        box-shadow: 0 0 1px 3px ${theme.colors.thirdColor} !important;
      }

      &:focus{
        background-color: ${theme.colors.thirdColor} !important;
        box-shadow: 0 0 1px 3px ${theme.colors.thirdColor} !important;
      }

      &:hover{
        box-shadow: 0 0 1px 3px ${theme.colors.thirdColor} !important;
      }
    }
  `}
`;
