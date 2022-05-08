import P from 'prop-types';
import * as Styled from './styles';

import { LinkComponent } from '../LinkComponent';

export const HeaderMenu = () => {
  return (
    <Styled.Menu>
      <LinkComponent link="/" model="alternative">
        My Favorites
      </LinkComponent>
      <LinkComponent link="/list/a/alcoholic" model="alternative">
        Alcoholic
      </LinkComponent>
      <LinkComponent link="/list/a/non_alcoholic" model="alternative">
        Non Alcoholic
      </LinkComponent>
      <LinkComponent link="/list/a/optional_alcohol" model="alternative">
        Optional Alcohol
      </LinkComponent>
      <LinkComponent link="/" model="alternative">
        All Drinks
      </LinkComponent>
      <LinkComponent link="/kind/i" model="alternative">
        All Ingredients
      </LinkComponent>
      <LinkComponent link="/kind/c" model="alternative">
        All Categories
      </LinkComponent>
      <LinkComponent link="/kind/g" model="alternative">
        All Glasses
      </LinkComponent>
    </Styled.Menu>
  );
};
