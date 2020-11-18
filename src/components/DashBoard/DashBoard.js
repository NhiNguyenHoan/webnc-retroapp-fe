import React from 'react'
import ButtonAppBar from './Header'
import ListBoards from './ListBoards'
import DashBoardHeader from './Navbar'
import SearchBar from './SearchBar'
export default function DashBoard() {
    return (
        <div>
            <ButtonAppBar/>
            <DashBoardHeader/>
            <SearchBar/>
            <ListBoards/>
        </div>
    )
}
