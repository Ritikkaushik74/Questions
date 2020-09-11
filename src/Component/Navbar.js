import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (

        <div className="nav_container">
            <Link className='nav_link' to='/'>
                <nav>Question 1</nav>
            </Link>
            <Link className='nav_link' to='/XOR'>
                <nav>Question 2</nav>
            </Link>
            <Link className='nav_link' to='/SortString'>
                <nav>Question 3</nav>
            </Link>
        </div>
    )
} export default Navbar