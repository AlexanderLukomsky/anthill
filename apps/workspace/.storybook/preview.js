import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getScheme } from 'theme.scheme';

const theme = createTheme(getScheme());

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];
