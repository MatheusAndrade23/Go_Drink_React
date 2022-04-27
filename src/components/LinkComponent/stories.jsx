import { LinkComponent } from '.';

export default {
  title: 'LinkComponent',
  component: LinkComponent,
  args: {
    children: 'LinkComponent',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <LinkComponent {...args} />;
};
