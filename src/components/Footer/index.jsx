import * as Styled from './styles';

import { BiDrink } from 'react-icons/bi';
import { TbApi } from 'react-icons/tb';
import { RiAwardFill } from 'react-icons/ri';
import { GiThorHammer } from 'react-icons/gi';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

import { Heading } from '../Heading';
import { LinkComponent } from '../LinkComponent';
import { TextComponent } from '../TextComponent';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { SmallContainer } from '../SmallContainer';

import config from '../../config';

export const Footer = () => {
  return (
    <Styled.Footer>
      <TextComponent>
        This website uses{' '}
        <LinkComponent link="https://www.thecocktaildb.com/">
          TheCocktailDB.
        </LinkComponent>
      </TextComponent>
      <TextComponent>
        If you like the site, please consider giving a star on{' '}
        <LinkComponent link="https://www.thecocktaildb.com/">
          GitHub.
        </LinkComponent>
      </TextComponent>
      <SmallContainer disposition="row">
        <Styled.SocialMedia href={config.linkedin} title="Linkedin">
          <AiOutlineLinkedin />
        </Styled.SocialMedia>
        <Styled.SocialMedia href={config.gitHub} title="GitHub">
          <AiOutlineGithub />
        </Styled.SocialMedia>
        <Styled.SocialMedia href={config.programaThor} title="ProgramaThor">
          <GiThorHammer />
        </Styled.SocialMedia>
        <Styled.SocialMedia href={config.apiUrl} title="Api">
          <TbApi />
        </Styled.SocialMedia>
      </SmallContainer>
      <Styled.FooterLogo>GODRINK ©</Styled.FooterLogo>
      <Styled.GoTop href="#" title="Go top">
        <BsFillArrowUpSquareFill />
      </Styled.GoTop>
      <ThemeSwitcher />
    </Styled.Footer>
  );
};
