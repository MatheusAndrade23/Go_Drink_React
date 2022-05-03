import styled, { css } from 'styled-components';

export const Error = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 80vh;
    background-color: ${theme.colors.fourthColor};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
