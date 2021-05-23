import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputWithButton from '../components/InputWithButton';

export default {
  title: 'Components/Input with button',
  component: InputWithButton,
};

export const Default = (): JSX.Element => (
  <Grid
    container
    justify="center"
    alignItems="center"
    style={{ height: '100vh', backgroundColor: '#36536b' }}
  >
    <InputWithButton
      buttonText="Schedule a Demo"
      placeHolder="Enter email address"
      helperText={
        <Typography variant="caption">
          Have any questions?{' '}
          <span style={{ fontWeight: 'bold' }}>Contact Us</span>
        </Typography>
      }
    />
  </Grid>
);
