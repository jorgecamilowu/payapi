import '@fontsource/dm-serif-display';
import '@fontsource/public-sans';
import '../styles/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';
import App from 'next/app';
import type { AppContext, AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { RootState } from '../store/rootReducer';
import { initializeStore, useStore } from '../store';

interface LocalProps extends AppProps {
  initialReduxState: RootState;
}

function MyApp({
  Component,
  pageProps,
  initialReduxState,
}: LocalProps): JSX.Element {
  /** This is needed for Material-UI setup */
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.remove();
    }
  }, []);

  const store = useStore(initialReduxState);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Calculadora</title>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={createMuiTheme()}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const reduxStore = initializeStore();

  return {
    ...appProps,
    initialReduxState: reduxStore.getState(),
  };
};

export default MyApp;
