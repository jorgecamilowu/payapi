import React from 'react';
import Head from 'next/head';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// subcomponents
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import {
  Main,
  Partners,
  EasyImplementation,
  Simplicity,
  UseCases,
  LastCta,
} from '../components/sections';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexFlow: 'column',
      height: '100vh',
    },
    body: {
      flex: 1,
    },
  }),
);

export default function Home(): JSX.Element {
  const classes = useStyles();
  const emptyFunc = (): void => {};
  return (
    <div className={classes.root}>
      <Head>
        <title>Pay API</title>
        <meta name="description" content="Frontend mentors challenge" />
      </Head>
      <div className={classes.body}>
        <Header onCTAClick={emptyFunc} />
        <Main onCallToAction={emptyFunc} />
        <Partners />
        <EasyImplementation />
        <Simplicity />
        <UseCases />
        <LastCta onCTA={emptyFunc} />
      </div>
      <Footer />
    </div>
  );
}
