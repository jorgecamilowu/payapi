import React from 'react';
import * as nextImage from 'next/image';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { addDecorator } from '@storybook/react';
import { theme } from '../theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// workaround to make storybook compatible with next/image
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});

const Center = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div style={{ padding: '20px' }}>{children}</div>
  </ThemeProvider>
);

addDecorator((storyFn) => <Center>{storyFn()}</Center>);
