import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BoardItem from "./BoardItem";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DialogCreateBoard from "./DialogCreateBoard";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ListBoards() {
  const classes = useStyles();
  const [listBoard, setlistBoard] = useState([]);
  const [openDialog, setopenDialog] = useState(false)

  useEffect(() => {
      axios.get(`dashboard/getByUid`)
          .then(function (response) {

              setlistBoard(response.data);
              console.log('response.data', response.data)
          })
          .catch(function (error) {

              console.log(error);
          })


  }, []);
  


  return (
    <div className={classes.root}>
      <div className="mainboard">
        <Grid container spacing={2}>
          <Grid item sm={4} md={3} lg={2} onClick={() => setopenDialog(true)}>
            <Paper className="btn-addboard">
              <AddCircleIcon fontSize="large" />
              <span>Add board</span>
            </Paper>
          </Grid>
          {listBoard && listBoard.map((board, index) =>
            <BoardItem key={index} id={board._id} name={board.name} context={board.context} />
        )}
        </Grid>
        {openDialog && <DialogCreateBoard onChange={(a) => setopenDialog(a)} />}
      </div>
    </div>
  );
}
