
import { App } from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
