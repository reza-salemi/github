import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {UserProvider} from "./contexts/user.context";
import './index.css';
import App from './App';
import {ThemeProvider} from "./contexts/theme.context";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider initialTheme="dark">
        <UserProvider>
          <App/>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

