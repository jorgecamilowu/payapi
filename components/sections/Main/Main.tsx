import React from 'react';
import Image from 'next/image';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useFormik } from 'formik';
import InputWithButton from '../../InputWithButton';
import makeValidationSchema from './makeValidationSchema';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 10%',
      [theme.breakpoints.down('md')]: {
        flexFlow: 'column',
      },
    },
    leftBlock: {
      flex: 1,
      display: 'flex',
      flexFlow: 'column',
      [theme.breakpoints.down('md')]: {
        order: 1,
      },
    },
    item: {
      margin: theme.spacing(3, 0),
      [theme.breakpoints.down('md')]: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(1, 0),
      },
    },
    phoneContainer: {
      order: 0,
    },
    phone: {
      marginRight: theme.spacing(-4),
      marginBottom: theme.spacing(-4),
      [theme.breakpoints.down('md')]: {
        width: theme.spacing(45),
      },
      [theme.breakpoints.down('xs')]: {
        width: theme.spacing(30),
        marginBottom: theme.spacing(-6),
      },
    },
    headline: {
      width: theme.spacing(68.25),
      [theme.breakpoints.down('md')]: {
        width: theme.spacing(80),
        textAlign: 'center',
        fontSize: theme.spacing(7),
        lineHeigt: theme.spacing(7),
      },
      [theme.breakpoints.down('xs')]: {
        width: theme.spacing(40),
        textAlign: 'center',
        fontSize: theme.spacing(4),
        lineHeight: theme.spacing(0.15),
      },
    },
  }),
);

interface Props {
  onCallToAction: (email: string) => void;
}

const Main = ({ onCallToAction }: Props): JSX.Element => {
  const classes = useStyles();
  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
      },
      onSubmit: ({ email }): void => {
        onCallToAction(email);
      },
      validationSchema: makeValidationSchema(),
    });

  return (
    <div className={classes.root}>
      <div className={classes.leftBlock}>
        <div className={classes.item}>
          <Typography variant="h1" className={classes.headline}>
            Start building with our APIs for absolutely free.
          </Typography>
        </div>
        <div className={classes.item}>
          <InputWithButton
            data-testid="input-with-button"
            id="email"
            name="email"
            defaultValue={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeHolder="Enter email address"
            buttonText="Schedule a Demo"
            onSubmit={handleSubmit}
            helperText={
              <Typography variant="caption">
                Have any questions?{' '}
                <span style={{ fontWeight: 'bold' }}>Contact Us</span>
              </Typography>
            }
            error={touched.email && Boolean(errors.email)}
            errorMsg={touched.email && errors.email}
          />
        </div>
      </div>
      <div className={`${classes.item} ${classes.phoneContainer}`}>
        <Image
          className={classes.phone}
          src="/home/desktop/illustration-phone-mockup.svg"
          alt="mobile-mockup"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Main;
