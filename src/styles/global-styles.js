import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.family.default};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;
