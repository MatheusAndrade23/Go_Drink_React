import styled, { css } from 'styled-components';

export const Drink = styled.div`
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
    }

    &:hover {
      box-shadow: 1px 0px 12px 0px ${theme.colors.shadow};
    }
  `}
`;
