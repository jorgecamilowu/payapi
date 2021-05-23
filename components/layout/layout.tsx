import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Header from '../common/Header';
import Footer from '../common/Footer';

const useStyles = makeStyles(
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

interface LayoutProps {
  onCTAClick: () => void;
  children?: React.ReactNode;
}

const Layout = ({ onCTAClick, children }: LayoutProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header onCTAClick={onCTAClick} />
      <main className={classes.body}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
