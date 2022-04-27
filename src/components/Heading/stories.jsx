import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Heading',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
