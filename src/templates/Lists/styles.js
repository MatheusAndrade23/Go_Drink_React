import styled, { css } from 'styled-components';

export const KindsContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.fourthColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 30px 0;

    & h4 {
      align-self: flex-start;
      margin-left: 30px;
    }

    & button {
      width: 200px;
    }
  `}
`;

export const Kind = styled.div`
  ${({ theme }) => css`
    margin: 10px 0;
    cursor: pointer;
    height: 340px;
    width: 310px;
    border: 2px solid ${theme.colors.secondaryColor};
    border-radius: 10px;
    transition: 0.5s;
    display: flex;
    flex-direction: column;

    & h6 {
      height: 35px;
      margin-left: 22px;
      width: 260px;
      overflow: hidden;
      margin-top: 10px;
    }

    & img {
      align-self: center;
      margin-top: 20px;
      width: 260px;
      border: 2px solid ${theme.colors.primaryColor};
      background-color: ${theme.colors.primaryColor};
    }

    &:hover {
      box-shadow: 1px 0px 12px 0px ${theme.colors.shadow};
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  `}
`;
