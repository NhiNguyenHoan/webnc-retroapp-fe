import React from 'react'
import Header from './Header'
import ListBoards from './ListBoards'
import NavBar from './Navbar'
import SearchBar from './SearchBar'
export default function DashBoard() {
    const user_id = localStorage.getItem('user_id');
    const username = localStorage.getItem('username');
    console.log('user_id',user_id);
    return (
        <div>
            <Header user_id ={username}/>
            <NavBar />
            <SearchBar/>
            <ListBoards/>
        </div>
    )
}
