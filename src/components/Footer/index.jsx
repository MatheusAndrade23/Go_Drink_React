import * as Styled from './styles';

import { useTranslation } from 'react-i18next';

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
import { LanguageSwitcher } from '../../components/LanguageSwitcher';

import config from '../../config';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Styled.Footer>
      <TextComponent>
        {`${t('cocktailDbCredits')} ${''}`}
        <LinkComponent link="https://www.thecocktaildb.com/">
          TheCocktailDB.
        </LinkComponent>
      </TextComponent>
      <TextComponent>
        {`${t('githubInvite')} ${''}`}
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
      <Styled.GoTop href="#" title={t('goTopTitle')}>
        <BsFillArrowUpSquareFill />
      </Styled.GoTop>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </Styled.Footer>
  );
};
