import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LinkIcon from '@material-ui/icons/Link';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FileCopyIcon from '@material-ui/icons/FileCopy';
const useStyles = makeStyles((theme) => ({


}));

export default function BoardItem({name}) {
  const classes = useStyles();
const handleClick = () => {

    
}

  return (

    <Grid item sm={4} md={3} lg={2} >
    <Paper className={classes.paper}>
        <div className="board_wrap" onClick={handleClick}>
            <div className="board_wrap-head">
                <div className="title">
                   {name}
                </div>
                <div className="info_wrap">
                    <div className="info_wrap-time">
                        <div className="icon-time">
                            <AccessTimeIcon />
                        </div>
                        <span>17 Oct</span>
                    </div>
                    <div className="info_wrap-card">
                        2 cards
                    </div>
                </div>
                <div className="elements">
                    <hr />
                    <div className="elements_wrap">
                        <div className="wentwell"></div>
                        <div className="toimprove"></div>
                        <div className="actions"></div>
                    </div>

                    <hr />
                </div>
            </div>


            <div className="button-group">
                <div className="btn-url">
                    <div className="link-icon">
                        <LinkIcon />
                    </div>
                    URL
                </div>
                <div className="btn-url">
                    <div className="link-icon">
                        <FileCopyIcon />
                    </div>
                    CLONE
                </div>
                <div className="btn-option">
                    <MoreVertIcon />
                </div>
            </div>
        </div>
    </Paper>
</Grid>

  );
}