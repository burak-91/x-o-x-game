import styled from "styled-components";


export const Container = styled.div`
    width: 500px;
    height: 500px;
    background-color: aquamarine;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`

export const Row = styled.div`
    flex: 33%;
    display:flex;
    flex-direction: row;
`

export const Button = styled.div`
margin-top: 20px;
background-color: blue;
height:40px;
color:white;
font-size: 2em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
text-align:center;
&:hover{
    opacity:0.8;
}
`

export const PlayerTurn = styled.h5`
font-size: 20px;
text-align:center;
background-color: blue;
color:white;
height:30px;
border: 2px solid palevioletred;
padding: 0.25em 1em;
`
