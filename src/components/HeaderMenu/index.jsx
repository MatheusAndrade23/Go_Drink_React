import P from 'prop-types';
import * as Styled from './styles';

import { LinkComponent } from '../LinkComponent';

export const HeaderMenu = () => {
  return (
    <Styled.Menu>
      <LinkComponent link="/" model="alternative">
        My Favorites
      </LinkComponent>
      <LinkComponent link="/" model="alternative">
        Alcoholic
      </LinkComponent>
      <LinkComponent link="/" model="alternative">
        Non Alcoholic
      </LinkComponent>
      <LinkComponent link="/" model="alternative">
        With Gin
      </LinkComponent>
      <LinkComponent link="/" model="alternative">
        With Vodka
      </LinkComponent>
      <LinkComponent link="/" model="alternative">
        With Bourbon
      </LinkComponent>
      <LinkComponent link="/" model="alternative">
        With Champagne
      </LinkComponent>
      <LinkComponent link="/" model="alternative">
        With Tequila
      </LinkComponent>
      <LinkComponent link="/" model="alternative">
        With Rum
      </LinkComponent>
    </Styled.Menu>
  );
};
