import { ButtonComponent } from '.';

const ConsoleFunction = () => {
  console.log('Clicked!');
};

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  args: {
    children: 'Clique Aqui!',
    handleSubmit: ConsoleFunction,
  },
  argTypes: {
    children: { type: 'string' },
    handleSubmit: { type: 'function' },
  },
};

export const Template = (args) => {
  return <ButtonComponent {...args} />;
};
