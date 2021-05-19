import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default {
  title: 'Design System/Button',
  component: Button,
};

export const Primary = (): JSX.Element => (
  <Grid container direction="column" spacing={2}>
    <Grid item>
      <Button variant="contained" color="primary">
        Schedule a Demo
      </Button>
    </Grid>
    <Grid item>
      <Button variant="contained" color="primary" disabled>
        Disabled
      </Button>
    </Grid>
  </Grid>
);

export const Secondary = (): JSX.Element => (
  <Grid
    container
    direction="column"
    spacing={2}
    style={{ backgroundColor: '#212121' }}
  >
    <Grid item>
      <Button variant="outlined" color="primary">
        Schedule a Demo
      </Button>
    </Grid>
    <Grid item>
      <Button variant="outlined" color="primary" disabled>
        Disabled
      </Button>
    </Grid>
  </Grid>
);
