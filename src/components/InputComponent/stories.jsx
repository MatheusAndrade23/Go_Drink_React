import { InputComponent } from '.';

const HandleChange = () => {
  console.log('Mudou!');
};

export default {
  title: 'InputComponent',
  component: InputComponent,
  args: {
    handleChange: HandleChange,
    type: 'text',
    name: 'search',
    text: '',
    placeholder: 'Gin, Vodka...',
  },
  argTypes: {
    name: { type: 'string' },
    text: { type: 'string' },
  },
};

export const Template = (args) => {
  return <InputComponent {...args} />;
};
