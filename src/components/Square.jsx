import React from "react";
import { SquareFiled } from "./square.style";


const Square = (props) => {
  return (
    <SquareFiled onClick={props.onClick}>
      <h5>{props.value}</h5>
    </SquareFiled>
  );
};

export default Square;
