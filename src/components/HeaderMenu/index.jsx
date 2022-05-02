import P from 'prop-types';
import * as Styled from './styles';

import { LinkComponent } from '../LinkComponent';

export const HeaderMenu = () => {
  return (
    <Styled.Menu>
      <LinkComponent link="/" model="alternative">
        My Favorites
      </LinkComponent>
      <LinkComponent link="/list/non-alcoholic" model="alternative">
        Non Alcoholic
      </LinkComponent>
      <LinkComponent link="/list/optional-alcohol" model="alternative">
        Optional Alcohol
      </LinkComponent>
    </Styled.Menu>
  );
};
