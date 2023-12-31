import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    * {
        margin : 0;
        padding : 0;
        box-sizing : border-box;
    }

    // MEdia Query 
    html {
        @media (max-width : 1500px){
            font-size: 75%;
        }
    }
    body {
        font-family: 'Poppins', sans-serif;

        background : #1b1b1b;
    }
    
    button {
        font-weight : bold;
        font-size : 1.1rem;
        cursor : pointer;
        padding : 1rem 2rem;
        border : 3px solid #23d997;
        background : transparent;
        color: white;
        transition : all 0.5s ease;
        &:hover {
            background-color : #23d997;
            color : white;

        }

        
    }
    h2 {
            font-weight : lighter;
            font-size : 3.6rem;
    }
    h3 {
            color : white;
    }
    h4 {
        font-weight : bold;
    }
    span {
        font-weight : bold;
        color : #23d997;
            font-size : 3.6rem;


    }
    p {
            padding : 3rem 0rem;
            color : #ccc;
            font-size : 1.4rem;
    }
    a {
        text-decoration: none;
        color: white;
    }
    ul {
        display: flex;
        align-items: center;
    }

`;

export default GlobalStyle;
