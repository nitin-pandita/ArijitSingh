import { styled } from "styled-components";

export const About = styled.div`
    min-height : 90vh;
    display : flex;
    align-items: center;
    justify-content: space-between;
    padding : 5rem 10rem;
    color : white; 
    

`;

export const Description = styled.div`
    padding-right: 5rem;
    flex: 1;
    h2 {
        font-weight: lighter;
    }
`

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 75vh;
        object-fit: cover;

    }
`
export const Hide = styled.div`
    overflow: hidden;

`