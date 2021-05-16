import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default {
  title: 'Design System/Check Box',
  component: Checkbox,
};

export const CheckBox = (): JSX.Element => (
  <Grid container direction="column" spacing={2}>
    <Grid item>
      <FormControlLabel
        value="top"
        control={<Checkbox />}
        label="Normal State"
        labelPlacement="start"
      />
    </Grid>
    <Grid item>
      <FormControlLabel
        value="checked"
        control={<Checkbox checked />}
        label="Active State"
        labelPlacement="start"
      />
    </Grid>
    <Grid item>
      <FormControlLabel
        value="disabled"
        control={<Checkbox />}
        label="Disabled"
        labelPlacement="start"
        disabled
      />
    </Grid>
  </Grid>
);
