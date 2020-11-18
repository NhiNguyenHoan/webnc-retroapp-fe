import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      float: 'left',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function DashBoardHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ButtonGroup color="primary" aria-label="outlined secondary button group">
        <Button>DASHBOARD</Button>
        <Button>TEAMS</Button>
        <Button>ANALYTICS</Button>
        <Button>BILLINGS</Button>
      </ButtonGroup>

    </div>
  );
}