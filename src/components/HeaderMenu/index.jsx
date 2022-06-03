import * as Styled from './styles';

import { LinkComponent } from '../LinkComponent';

export const HeaderMenu = () => {
  return (
    <Styled.Menu>
      <LinkComponent link="/favorites" model="alternative">
        My Favorites
      </LinkComponent>
      <LinkComponent link="/kind/a/alcoholic" model="alternative">
        Alcoholic
      </LinkComponent>
      <LinkComponent link="/kind/a/non_alcoholic" model="alternative">
        Non Alcoholic
      </LinkComponent>
      <LinkComponent link="/kind/a/optional_alcohol" model="alternative">
        Optional Alcohol
      </LinkComponent>
      <LinkComponent link="/all-drinks" model="alternative">
        All Drinks
      </LinkComponent>
      <LinkComponent link="/list/ingredients" model="alternative">
        All Ingredients
      </LinkComponent>
      <LinkComponent link="/list/categories" model="alternative">
        All Categories
      </LinkComponent>
      <LinkComponent link="/list/glasses" model="alternative">
        All Glasses
      </LinkComponent>
    </Styled.Menu>
  );
};
