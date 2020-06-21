import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default async function AddressForm({setData, data}) {
  // TODO: Plug API call in here
  const calculation = parseInt(data.balance) + parseInt(Math.round((data.balance * (Math.pow(1 + (data.interest/100) / data.period, data.period * data.lengthOfTime) - 1))));

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Investment overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          Your initial £{data.balance} investment after {data.lengthOfTime} years at {data.interest}% would be worth £{calculation}.
        </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}