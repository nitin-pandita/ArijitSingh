import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <Nav>
      <Logo>
        <Link to="/">Arijit Singh</Link>
      </Logo>
      <ul>
        <li>
          <Link to="/about">About</Link>
          <Line
            transition={{ duration: 1 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/about" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/list">Popular Songs</Link>
          <Line
            transition={{ duration: 1 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/list" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/social">Socials</Link>
          <Line
            transition={{ duration: 1 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/social" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 10vh;
  margin: auto;
  padding: 1rem 10rem;
  background: #282828;

  li {
    padding-left: 6rem;
    font-size: 1.4rem;
    list-style: none;
    position: relative;
    display: inline-block;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 2rem;

    ul {
      padding: 2rem;
      justify-content: center;
      width: 100%;
    }
    li {
      padding: 20px;
    }
  }
`;
const Logo = styled(motion.div)`
  font-weight: lighter;
  font-size: 1.7rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -20%;
  left: 50%;

  @media (max-width: 1300px) {
    bottom: 0%;
    left: 10%;
    top: 70%;
  }
`;

export default Navbar;
