import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AddressForm({setData, data}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Investment details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="initialBalance"
            name="initialBalance"
            label="Initial balance"
            value={data.balance || ''}
            fullWidth
            onChange={(event) => {setData({...data, balance: event.target.value})}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="interestRate"
            name="interestRate"
            label="Interest rate"
            value={data.interest || ''}
            fullWidth
            onChange={(event) => {setData({...data, interest: event.target.value})}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="period"
            name="period"
            value={data.period || ''}
            label="How often interest is applied"
            fullWidth
            onChange={(event) => {setData({...data, period: event.target.value})}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="lengthOfTime"
            name="lengthOfTime"
            label="Length of time invested"
            value={data.lengthOfTime || ''}
            fullWidth
            onChange={(event) => {setData({...data, lengthOfTime: event.target.value})}}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}