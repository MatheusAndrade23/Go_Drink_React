import P from 'prop-types';
import * as Styled from './styles';

export const Menu = ({ bold = false, links = [] }) => {
  return (
    <Styled.Menu bold={bold}>
      {links.map((link) => {
        return (
          <li key={link}>
            <a href={link.link}>{link.text}</a>
          </li>
        );
      })}
    </Styled.Menu>
  );
};

Menu.propTypes = {
  bold: P.bool,
  links: P.array,
};
