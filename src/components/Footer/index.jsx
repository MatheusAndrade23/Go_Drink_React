import * as Styled from './styles';

import Config from '../../config';

import { LinkComponent } from '../LinkComponent';
import { TextComponent } from '../TextComponent';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { SmallContainer } from '../SmallContainer';

export const Footer = () => {
  return (
    <Styled.Footer>
      {/* <TextComponent size="small">- MIT License</TextComponent> */}
      {/* <SmallContainer disposition="row">
        <LinkComponent link={Config.gitHubUrl} size="small">
          Click here to see the source code!
        </LinkComponent>
      </SmallContainer>
      <SmallContainer disposition="row">
        <TextComponent>
          This website uses the{' '}
          <LinkComponent link={Config.apiUrl} size="small">
            Cocktail DB.
          </LinkComponent>
        </TextComponent>
      </SmallContainer> */}
      <ThemeSwitcher />
    </Styled.Footer>
  );
};
