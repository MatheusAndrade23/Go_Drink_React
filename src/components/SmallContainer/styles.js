import styled, { css } from 'styled-components';

const SetDisposition = {
  column: (theme) => css`
    flex-direction: column;
  `,
  row: (theme) => css`
    flex-direction: row;
  `,
};

export const Container = styled.div`
  ${({ theme, disposition }) => css`
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    ${SetDisposition[disposition](theme)}
  `}
`;
