import { Menu } from '.';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: [
      { link: '#', text: 'Página Inicial' },
      { link: '#', text: 'Listas' },
    ],
  },
  argTypes: {},
};

export const Template = (args) => {
  return <Menu {...args} />;
};
