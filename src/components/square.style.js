import styled from "styled-components";



export const SquareFiled = styled.div`
    flex: 33%;
    height: 100%;
    border: 1px solid black;
    cursor:pointer;
    display:grid;
    place-items: center;
    font-size: 30px;
    color:black;
    &:active{
        background-color: #64f4c4;
    }

`