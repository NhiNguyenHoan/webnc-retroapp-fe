import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MainBoard from "./BoardDetail/MainBoard";
import axios from 'axios';
export default function FormDialog({onChange}) {
  const [open, setOpen] = React.useState(true);

  const [board, setBoard] = useState({
    name: '',
    context: "",
    Item: [[], [], []]
})
  const handleClickOpen = () => {
    setOpen(true);
  };
  let history = useHistory();
  const handleCreate = () => {
    console.log('board', board)
    const data = { ...board }
    console.log('data', data)
    axios({
        method: 'post',
        url: '/dashboard/createBoard',
        data
    })
        .then(function (response) {
            console.log('response', response.data._id)
           const id = response.data._id;
             history.push(`/board/${id}`);
        })
        .catch(function (error) {
            console.log(error);
        });;




    onChange(false)
    // setOpen(false);
};


  const handleClose = () => {
   onChange(false);
  };


const handleNameChange = (event) => {
    setBoard({ ...board, name: event.target.value });
    // console.log('board', board)
};

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            value={board.name}
            onChange ={handleNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreate} variant="contained" color="secondary">
          CREATE
      </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
