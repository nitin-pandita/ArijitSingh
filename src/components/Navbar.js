import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Navbar = () => {
    return (
        <Nav>
            <Logo><Link to='/'>Arijit Singh</Link></Logo>
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/list'>Popular Songs</Link></li>
                <li><Link to='/social'>Socials</Link></li>
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

`;
const Logo = styled.div`
    font-weight: lighter;
    font-size: 1.7rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export default Navbar;