import { Logo } from '.';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    text: 'GODRINK',
  },
  argTypes: {
    text: { type: 'string' },
  },
};

export const Template = (args) => {
  return <Logo {...args} />;
};
