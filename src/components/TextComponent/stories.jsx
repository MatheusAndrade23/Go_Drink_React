import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, sunt pariatur tenetur ab commodi optio id atque facere doloribus sit repudiandae libero numquam est quidem! Architecto quia deleniti tempore unde.',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <TextComponent {...args} />;
};
