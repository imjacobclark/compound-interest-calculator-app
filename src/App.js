import React, {useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';

import DetailsForm from './components/DetailsForm';
import Overview from './components/Overview';
import Visualise from './components/Visualise';

import { Plugins } from '@capacitor/core';

const { Network, Toast } = Plugins;

function Copyright() {
  return (
    <span>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Version 1.0'}
      </Typography>
      <br />
      <Typography variant="body2" color="textSecondary" align="center">
        {'Built by '}
        <Link color="inherit" href="https://jacobclark.xyz/">
          Jacob Clark
        </Link>{' '}
        {'& '}
        <Link color="inherit" href="http://github.com/chrisgrounds/">
          Chris Grounds
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </span>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    paddingTop: 'env(safe-area-inset-top)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
}));

const steps = ['Details', 'Overview', 'Visualisation'];

const stepContents = [
  (setData, data) => <DetailsForm setData={setData} data={data} />,
  (setData, data) => <Overview setData={setData} data={data} />,
  (_setData, data) => <Visualise data={data}/>
];

function getStepContent(step, setData, data, setActiveStep) {
  try {
    return stepContents[step](setData, data);
  } catch (_e) {
    return setActiveStep(0);
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [connected, setConnected] = React.useState(false);

  const [data, setData] = React.useState({
    balance: undefined,
    interest: undefined,
    monthlyPayments: undefined,
    period: undefined,
    lengthOfTime: undefined,
    value: undefined,
    history: [],
    error: false,
    dirty: false,
    left: false
  });

  useEffect(() => {
    (async function x() {
      const networkStatus = await Network.getStatus()
      setConnected(networkStatus.connected);

      if(!networkStatus.connected){
        await Toast.show({
          text: "Oops, you appear to be offline!",
          duration: 'long',
          position: 'center'
        });
      }
    })();
  })

  const handleNext = () => {
    if(!data.balance || !data.interest || !data.monthlyPayments || !data.period || !data.lengthOfTime ){
      setData({...data, dirty: true});
      return;
    }
    setActiveStep(activeStep + 1);
  }

  const handleBack = () => setActiveStep(activeStep - 1);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setData({ ...data, "left": open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div style={{ paddingTop: "20px" }}>
        {Copyright()}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <SwipeableDrawer
        anchor="left"
        open={data["left"]}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list("left")}
      </SwipeableDrawer>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Compound Interest
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Calculator
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>

            {getStepContent(activeStep, setData, data, setActiveStep)}

            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                disabled={!connected}
              >
                {activeStep === 0 && 'Calculate'}
                {activeStep === 1 && 'Visualise'}
                {activeStep === 2 && 'Done'}
              </Button>
            </div>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}