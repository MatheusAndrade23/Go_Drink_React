import { SmallContainer } from '.';

import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export default {
  title: 'SmallContainer',
  component: SmallContainer,
  args: {
    children: (
      <>
        <Heading>Small Container</Heading>
        <TextComponent>
          This is the small container! You can choose if it is a column or row
        </TextComponent>
      </>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <SmallContainer {...args} />;
};
