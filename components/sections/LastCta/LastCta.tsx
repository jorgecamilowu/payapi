import React, { ReactElement } from 'react';
import { useFormik } from 'formik';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import InputWithButton from '../../InputWithButton';
import makeValidationSchema from './makeLastCtaValidationSchema';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: theme.spacing(12.5),
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        flexFlow: 'column',
        height: theme.spacing(25),
        justifyContent: 'center',
        gap: theme.spacing(5, 0),
      },
      [theme.breakpoints.down('xs')]: {
        gap: theme.spacing(2, 0),
      },
    },
    input: {
      [theme.breakpoints.down('xs')]: {
        width: '85vw',
      },
    },
    title: {
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.spacing(4),
      },
    },
  }),
);

interface Props {
  onCTA: (val: string) => void;
}

export default function LastCta({ onCTA }: Props): ReactElement {
  const classes = useStyles();
  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        email: '',
      },
      onSubmit: ({ email }) => onCTA(email),
      validationSchema: makeValidationSchema(),
    });

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h2" className={classes.title}>
          Ready to start?
        </Typography>
      </div>
      <div className={classes.input}>
        <InputWithButton
          id="lastCta-email"
          name="email"
          placeHolder="Enter email address"
          defaultValue={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          onSubmit={handleSubmit}
          error={touched.email && Boolean(errors.email)}
          errorMsg={touched.email && errors.email}
          buttonText="Schedule a Demo"
        />
      </div>
    </div>
  );
}
