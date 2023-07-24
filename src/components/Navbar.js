import React from 'react'
import { styled } from 'styled-components'
const Navbar = () => {
    return (
        <Nav>
            <h1><a href="#">Arijit Singh</a></h1>
            <ul>
                <li><a href="#">About Arijit Singh</a></li>
                <li><a href="#">Songs</a></li>
                <li><a href="#">Popular Songs</a></li>
                <li><a href="#">Socials</a></li>
            </ul>

        </Nav>
    )
}

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 10vh;
    margin: auto;
    padding: 1rem 10rem;
    background : #282828

`

export default Navbar