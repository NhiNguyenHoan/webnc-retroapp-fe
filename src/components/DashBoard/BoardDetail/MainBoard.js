import React from "react";
import {useParams} from "react-router-dom";
import CardDragDrop from "./CardDragDrop";
import BoardTitle from "./BoardTitle";
import Navbar from "../Navbar";

export default function MainBoard() {
  const {id} = useParams();
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <Navbar/>
      <BoardTitle/>
      <CardDragDrop id = {id}/>
    </div>
  );
}
