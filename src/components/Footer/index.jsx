import P from 'prop-types';
import * as Styled from './styles';

import Config from '../../config';

import { TextComponent } from '../TextComponent';
import { LinkComponent } from '../LinkComponent';

export const Footer = () => {
  return (
    <Styled.Footer>
      <TextComponent size="small">MIT License</TextComponent>
      <LinkComponent link={Config.linkedinUrl} size="small">
        Linkedin
      </LinkComponent>
      <LinkComponent link={Config.gitHubUrl} size="small">
        GitHub
      </LinkComponent>
    </Styled.Footer>
  );
};
