import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


import defaultTheme from '../../assets/themes/default';
import GlobalStyle from '../../assets/themes/global';
import AuthProvider from '../../contexts/AuthContext';

import Routes from '../../MainRoutes';
import ToastContainer from '../Toast/ToastContainer';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}