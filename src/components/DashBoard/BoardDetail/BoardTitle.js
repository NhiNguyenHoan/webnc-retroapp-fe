import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {},
  margin: {},
  title: {
    textAlign: "center",
  },
}));

export default function BoardTitle({ id }) {
  const classes = useStyles();
  const [titleStatus, setTitleStatus] = useState(true);
  const initialBoard = {
    name: "",
  };
  const [newboard, setNewBoard] = useState(initialBoard);
  const handleOnCick = () => {
    if (newboard.name != board.name) {
      editTitle();
      setTitleStatus(true);
    } else {
      setTitleStatus(false);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBoard({ ...newboard, [name]: value });
  };
  const editTitle = () => {
    axios({
      method: "post",
      url: `/dashboard/edit/${id}`,
      data: newboard,
    })
      .then(function (response) {
        setNewBoard({ ...response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [board, setBoard] = useState({});
  useEffect(() => {
    axios({
      method: "get",
      url: `/dashboard/${id}`,
    })
      .then(function (response) {
        setBoard({ ...response.data });
        setNewBoard({ ...response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.title}
        id="standard-textarea"
        value={newboard.name}
        disabled={titleStatus}
        name="name"
        onChange={handleInputChange}
        inputProps={{ min: 0, style: { textAlign: "center" } }}
        placeholder="Title Name"
        multiline
      />
      <IconButton
        aria-label="edit"
        className={classes.margin}
        onClick={handleOnCick}
      >
        <EditIcon />
      </IconButton>
    </form>
  );
}
