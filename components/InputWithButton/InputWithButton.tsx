import React, { ReactElement } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { colors } from '../../theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: '100%',
      maxWidth: theme.spacing(55.625),
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
      },
    },
    input: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: 'bold',
      color: colors.blue,
      display: 'inline-block',
      backgroundColor: colors.white,
      borderRadius: 100,
      border: 'none',
      height: theme.spacing(6),
      width: theme.spacing(55.625),
      padding: theme.spacing(2, 3),
      boxShadow: '2px 5px 15px rgba(0,0,0,0.2)',
      '&:hover': {
        cursor: 'pointer',
      },
      '&:focus': {
        outline: 'none',
      },
      '&::placeholder': {
        color: colors.lightBlue,
      },
      [theme.breakpoints.down('xs')]: {
        flex: 1,
        width: '100%',
        marginBottom: theme.spacing(2),
      },
    },
    button: {
      position: 'absolute',
      top: 0,
      right: -2,
      width: theme.spacing(21.625),
      minHeight: theme.spacing(6),
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
      [theme.breakpoints.down('xs')]: {
        position: 'relative',
        flex: 1,
        width: '100%',
      },
    },
    helperTextOffset: {
      margin: theme.spacing(1.5, 0, 0, 3),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1.5, 0, 0, 0),
        textAlign: 'center',
      },
    },
  }),
);

interface Props {
  id?: string;
  name?: string;
  defaultValue?: string;
  placeHolder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  buttonText?: string;
  error?: boolean;
  errorMsg?: string;
  helperText?: React.ReactNode;
  disabled?: boolean;
}

export default function InputWithButton({
  id,
  name,
  buttonText,
  defaultValue,
  placeHolder,
  onChange,
  onSubmit,
  onFocus,
  onBlur,
  error,
  errorMsg,
  disabled,
  helperText,
}: Props): ReactElement {
  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <input
        data-testid="input"
        id={id}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeHolder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        className={classes.input}
      />
      <Button
        data-testid="btn"
        variant="contained"
        color="primary"
        type="submit"
        className={classes.button}
        disabled={error}
      >
        {buttonText}
      </Button>
      {error && (
        <FormHelperText
          data-testid="error-text"
          className={classes.helperTextOffset}
          style={{ color: 'red' }}
        >
          {errorMsg}
        </FormHelperText>
      )}
      <FormHelperText
        data-testid="helper-text"
        className={classes.helperTextOffset}
      >
        {helperText}
      </FormHelperText>
    </form>
  );
}
