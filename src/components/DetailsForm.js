import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export default function AddressForm({setData, data}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Investment details
      </Typography>
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              error={data.dirty && !data.balance}
              type="number"
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
              error={data.dirty && !data.interest}
              type="number"
              required
              id="interestRate"
              name="interestRate"
              label="Interest rate (%)"
              value={data.interest || ''}
              fullWidth
              onChange={(event) => {setData({...data, interest: event.target.value})}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={data.dirty && !data.monthlyPayments}
              type="number"
              required
              id="monthlyPayments"
              name="monthlyPayments"
              value={data.monthlyPayments || ''}
              label="Additional monthly payments"
              fullWidth
              onChange={(event) => {setData({...data, monthlyPayments: event.target.value})}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={data.dirty && !data.period}
              type="number"
              required
              id="period"
              name="period"
              value={data.period || ''}
              label="How often interest is applied (per year)"
              fullWidth
              onChange={(event) => {setData({...data, period: event.target.value})}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={data.dirty && !data.lengthOfTime}
              type="number"
              required
              id="lengthOfTime"
              name="lengthOfTime"
              label="Length of time invested (years)"
              value={data.lengthOfTime || ''}
              fullWidth
              onChange={(event) => {setData({...data, lengthOfTime: event.target.value})}}
            />
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}