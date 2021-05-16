import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default {
  title: 'Design System/Text Field',
  component: TextField,
};

export const Default = (): JSX.Element => (
  <Grid container direction="column" spacing={2}>
    <Grid item>
      <TextField label="Default" placeholder="placeholder" />
    </Grid>
    <Grid item>
      <TextField
        label="Error"
        placeholder="placeholder"
        error
        defaultValue="invalid input"
      />
    </Grid>
    <Grid item>
      <TextField label="Disabled" placeholder="placeholder" disabled />
    </Grid>
  </Grid>
);
