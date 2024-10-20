import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import getTheme from './theme/theme';
import ColorModeContext from './utils/ColorModeContext';
import Layout from './layout/Layout';
import Home from './pages/Home';

const defaultTheme = 'light';

const App = (): JSX.Element => {
  const [mode, setMode] = useState(defaultTheme);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        window.localStorage.setItem('themeMode', newMode);
        setMode(newMode);
      },
    }),
    [mode],
  );

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeMode');
    if (localTheme && (localTheme === 'light' || localTheme === 'dark')) {
      setMode(localTheme);
    } else {
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(prefersDarkMode ? 'dark' : 'light');
    }
  }, []);

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Entretien Robot Husqvarna & Gardena"
        defaultTitle="Entretien Robot Husqvarna & Gardena"
      >
        <html lang="fr" />
        <meta
          name="description"
          content="Service d'entretien pour robots tondeuses Husqvarna et Gardena"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://votre-domaine.com" />
      </Helmet>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={getTheme(mode)}>
          <CssBaseline />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </HelmetProvider>
  );
};

export default App;
