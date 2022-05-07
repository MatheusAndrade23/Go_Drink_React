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
    </Styled.Menu>
  );
};
