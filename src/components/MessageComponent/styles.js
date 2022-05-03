import styled, { css } from 'styled-components';

export const MessageContainer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    background-color: ${theme.colors.fourthColor};
    padding: 40px;
    width: max-content;
    z-index: 10;
    border: 2px solid ${theme.colors.primaryColor};
    border-radius: 10px;
    top: 70px;
    right: 20px;
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.8);

    & p {
      color: ${theme.colors.thirdColor};
      font-weight: bold;
      font-family: ${theme.fonts.family.secondary};
    }
  `}
`;
