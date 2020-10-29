import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import type { AppProps /*, AppContext */ } from 'next/app'
import { AppBar, Toolbar, IconButton, Typography, Button, } from "@material-ui/core";
import { ExtendButtonBase } from "@material-ui/core/ButtonBase";
import Link from "../src/Link";
//import Link from 'next/link'
import AcUnit from "@material-ui/icons/AcUnit";


export default function MyApp({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      if (jssStyles.parentElement) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" component={Link} naked href="/">
              <AcUnit />
            </IconButton>
            <Button color="inherit">Instituto Superior de Formación Técnica 118</Button>
          </Toolbar>
        </AppBar>

        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};