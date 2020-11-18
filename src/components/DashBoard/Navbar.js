import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
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

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ButtonGroup color="primary" aria-label="outlined secondary button group">
      
        <Button><Link to={{pathname: `/home`}}>DASHBOARD</Link></Button>
        <Button><Link to={{pathname: `/home`}}>TEAMS</Link></Button>
        <Button><Link to={{pathname: `/home`}}>ANALYSIS</Link></Button>
        <Button><Link to={{pathname: `/home`}}>BILLING</Link></Button>

      </ButtonGroup>

    </div>
  );
}