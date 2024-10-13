
import { App } from 'components/App';
import { GlobalStyles } from 'components/GlobalStyled';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    textColor: '#gray',
    bgColor: '#f1dd38',
    white: '#fff',
  },
  radii: {
    sm: '5px',
    md: '10px',
  },
  spacing: value => `${value * 4}px`,
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>
);
