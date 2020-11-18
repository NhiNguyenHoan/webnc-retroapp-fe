import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import CardDragDrop from "./CardDragDrop";
import BoardTitle from "./BoardTitle";
import Navbar from "../Navbar";
import axios from "axios";
export default function MainBoard() {
  const {id} = useParams();
  const [board, setboard] = useState({})
    useEffect(() => {
        axios({
            method: 'get',
            url: `/dashboard/${id}`,
        })
            .then(function (response) {

                setboard({ ...response.data })
            })
            .catch(function (error) {
                console.log(error);
            });;
    }, []);
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <Navbar/>
      <BoardTitle id ={id}/>
      <CardDragDrop id = {id}/>
    </div>
  );
}
