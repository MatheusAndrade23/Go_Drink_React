import P from 'prop-types';
import * as Styled from './styles';

import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const ErrorComponent = ({ code, message }) => {
  return (
    <Styled.Error>
      {code ? (
        <>
          <Heading as="h4" size="medium">
            {`Error ${code}`}
          </Heading>
          <TextComponent>{message}</TextComponent>
        </>
      ) : (
        <Heading as="h4" size="medium">
          {message}
        </Heading>
      )}
    </Styled.Error>
  );
};

ErrorComponent.propTypes = {
  code: P.number,
  message: P.string.isRequired,
};
