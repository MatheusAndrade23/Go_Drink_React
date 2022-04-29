import P from 'prop-types';
import * as Styled from './styles';

export const Logo = ({ text, srcImg = '' }) => {
  return (
    <Styled.Logo href="/">
      {srcImg ? <Styled.LogoImg src={srcImg} alt={text} /> : text}
    </Styled.Logo>
  );
};

Logo.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
};
