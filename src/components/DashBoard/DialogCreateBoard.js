import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
export default function FormDialog({onChange}) {
  const [open, setOpen] = React.useState(true);

  const [board, setBoard] = useState({
    name: '',
    context: "",
    Item: [[], [], []]
})

  let history = useHistory();
  const handleCreate = () => {
    console.log('board', board)
    const data = { ...board }
    data.uid = localStorage.getItem('user_id');
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

};


  const handleClose = () => {
   onChange(false);
  };


const handleNameChange = (event) => {
    setBoard({ ...board, name: event.target.value });

};

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> Create New RetroBoard</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Template Went Well - To Improve - Action
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Board Name"
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
