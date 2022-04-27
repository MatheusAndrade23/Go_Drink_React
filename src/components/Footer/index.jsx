import P from 'prop-types';
import * as Styled from './styles';

import Config from '../../config';

import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';
import { LinkComponent } from '../LinkComponent';

export const Footer = () => {
  return (
    <SectionContainer>
      <Styled.Footer>
        <TextComponent size="small">MIT License</TextComponent>
        <LinkComponent link={Config.linkedinUrl} size="medium">
          Linkedin
        </LinkComponent>
        <LinkComponent link={Config.gitHubUrl} size="medium">
          GitHub
        </LinkComponent>
      </Styled.Footer>
    </SectionContainer>
  );
};
