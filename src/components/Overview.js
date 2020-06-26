import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const formatCurrency = number => {
  return new Intl.NumberFormat('en-gb', { style: 'currency', currency: 'GBP' }).format(number);
}

export default function Overview({data}) {
  const [calculation, setValue] = useState(1);
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://3jvichlsm2.execute-api.eu-west-2.amazonaws.com/dev/calculate/api?principal=${data.balance}&interestRate=${(data.interest/100)}&monthlyAmount=${0.00}&termLength=${data.lengthOfTime}`,
      ).then(response => response.json())

      setValue(result.value);
    }
    fetchData();
  });

  // let calculation = parseInt(data.balance) + parseInt(Math.round((data.balance * (Math.pow(1 + (data.interest/100) / data.period, data.period * data.lengthOfTime) - 1))));

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Investment overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          Your initial £{data.balance} investment after {data.lengthOfTime} years at {data.interest}% would be worth {formatCurrency(calculation)}.
        </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}