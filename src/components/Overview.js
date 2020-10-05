import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const formatCurrency = number => {
  return new Intl.NumberFormat('en-gb', { style: 'currency', currency: 'GBP' }).format(number);
}

const useStyles = makeStyles((theme) => ({
    loadingBox: {
      "background": `linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)`,
      "background-size": `400% 400%`,
      "animation": `$gradient 15s ease infinite`,
      "height": "20px",
      "width": "100%",
      "display": "block",
      "border-radius": "5px",
    },
    "@keyframes gradient": {
      "0%": {
        "background-position": "0% 50%"
      },
      "50%": {
        "background-position": "100% 50%"
      },
      "100%": {
        "background-position": "0% 50%"
      }
    }
}));


export default function Overview({data, setData}) {
  const [calculation, setValue] = useState(false);
  const classes = useStyles();
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://3jvichlsm2.execute-api.eu-west-2.amazonaws.com/dev/calculate/api?principal=${data.balance}&interestRate=${(data.interest/100)}&monthlyAmount=${data.monthlyPayments}&termLength=${data.lengthOfTime}`,
      ).then(response => response.json())

      setValue(result.value);
      setData({...data, value: result.value, history: result.history})
    }
    fetchData();
  });

  const body = () => {
    if(calculation){
      return (<Typography variant="body1" gutterBottom>
      Your initial £{data.balance} investment after {data.lengthOfTime} years at {data.interest}% would be worth {formatCurrency(calculation)}.
    </Typography>);
    } else {
      return (<Typography variant="body1" gutterBottom>
        <span className={classes.loadingBox}></span>
    </Typography>);
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Investment overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {body()}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}