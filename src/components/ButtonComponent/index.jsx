import P from 'prop-types';
import * as Styled from './styles';

export const ButtonComponent = ({
  children,
  handleSubmit,
  bold = true,
  uppercase = false,
  size = 'small',
  model = 'standard',
}) => {
  return (
    <Styled.Button
      onClick={handleSubmit}
      uppercase={uppercase}
      bold={bold}
      size={size}
      model={model}
    >
      {children}
    </Styled.Button>
  );
};

ButtonComponent.propTypes = {
  children: P.node.isRequired,
  handleSubmit: P.func.isRequired,
  uppercase: P.bool,
  bold: P.bool,
  size: P.oneOf(['xsmall', 'small', 'medium']),
  model: P.oneOf(['standard', 'icon']),
};
