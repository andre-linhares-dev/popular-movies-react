import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link) `
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
height: 100%;
width: 100%;
border: 2px solid #000;
border-radius: 10px 10px 53px 18px;
text-decoration: none;
:hover{
    cursor: pointer;
    border: 2px solid #ededed;
}
.infoContainer{
    width: 100%;
    background-color: #ededed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 20%;
    align-self: center;
    font-size: 2.5vh;
    color: black;
    border-radius: 0 0 50px 15px;
    p{
        margin: 1vh 1vw 1vh 1vw;
    }
}
img{
    width: 100%;
    height: 80%;
    border-radius: 7px 7px 0 0;
}
`

export const Grid = styled.div`
display: grid;
justify-content: center;
align-items: center;
min-height: 20vh;
text-decoration: none;
padding: 10vh 2vw;
/* width: 80%; */
gap: 2vw;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

