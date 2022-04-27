import { ThemeProvider } from '../src/providers/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#EEEEEE',
      },
      {
        name: 'dark',
        value: '#222831',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
