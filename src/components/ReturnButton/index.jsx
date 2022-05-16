import * as Styled from './styles';

import { IoIosArrowBack } from 'react-icons/io';

export const ReturnButton = () => {
  return (
    <Styled.ReturnLink href="/">
      <IoIosArrowBack />
    </Styled.ReturnLink>
  );
};
