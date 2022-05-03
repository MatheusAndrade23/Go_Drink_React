import P from 'prop-types';
import * as Styled from './styles';

export const MessageComponent = ({ message }) => {
  return (
    <Styled.MessageContainer>
      <p>{message}</p>
    </Styled.MessageContainer>
  );
};

MessageComponent.propTypes = {
  message: P.string.isRequired,
};
