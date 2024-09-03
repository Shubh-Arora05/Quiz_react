import React from "react";
import "./Square.css";
function Square(props) {
  return (
    <>
      <div onClick={props.onClick} className="Square">
        {props.value} 
      </div>
    </>
  );
}

export default Square;
