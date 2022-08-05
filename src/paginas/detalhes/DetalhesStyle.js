import styled from "styled-components"

export const RightSide = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 2vw;
p{
    font-size: 1.5vw;
    color: #fff;
}
a{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 14vw;
    border: 0;
    border-radius: 1.5vw;
    background-color: #c62924;
    color: #fff;
    font-size: 1.5vw;
    cursor: pointer;
    text-decoration: none;
    :hover{
        opacity: 0.9;
    }
}
`

export const MainContainer = styled.div`
img{
    margin: 2vh 0 2vh 3.5vw;
    width: 25.65vw;
    height: auto;
    border-style: solid;
    border-radius: 15px;
    border-width: 2px;
    border-color: #ededed;
    
}
`

export const Grid = styled.div`
display: grid;
grid-template-columns: 33% 65%;
background-color: #000;
`