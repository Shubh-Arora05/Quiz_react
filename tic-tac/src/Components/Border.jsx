import React, { useState } from "react";
import Square from "./Square";
import { Link } from "react-router-dom";

import { useContext } from "react";

import { ThemeContext } from "../Context/Context";

function Border(props) {

  const { theme, change_theme } = useContext(ThemeContext);
 
  
  const [user, setuser] = useState(props.value);

  const [state, setstate] = useState(Array(9).fill(null));
 
  function handle_reset(){
    setstate(Array(9).fill(null));
    setuser(props.value);
  }

  function check_winner() {
    const winner_logic = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    for (let i of winner_logic) {
      const [a, b, c] = i;
      if (state[a] && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    const winner = check_winner();
    if (winner || state[i]) return;

    const copy_state = [...state];
    copy_state[i] = user ? "X" : "O";
    setstate(copy_state);
    setuser(!user);
  }
  const get_status = () => {
    
    
   
    const winner = check_winner();
    
    if (winner === null && !state.includes(null)) {
       
        
      return "Game is Drawn";
    } else if (winner !== null) {
        
       
      let str = `Player ${winner} is winner`;
      console.log(str);
      return str;
    } else if (user) {
      return "Player X's turn";
    } else if (!user) {
      return "Player O's turn";
    }
  
  };

  return (
    <>
   
    <h1>{get_status()}</h1>
    <div className=  "box" >
      <div className="row">
        <Square
          onClick={() => {
            handleClick(0);
          }}
          value={state[0]}
        />
        <Square
          onClick={() => {
            handleClick(1);
          }}
          value={state[1] }
        />
        <Square
          onClick={() => {
            handleClick(2);
          }}
          value={state[2] }
        />
      </div>

      <div className="row">
        <Square
          onClick={() => {
            handleClick(3);
          }}
          value={state[3] }
        />
        <Square
          onClick={() => {
            handleClick(4);
          }}
          value={state[4] }
        />
        <Square
          onClick={() => {
            handleClick(5);
          }}
          value={state[5] }
        />
      </div>

      <div className="row">
        <Square
          onClick={() => {
            handleClick(6);
          }}
          value={state[6] }
        />
        <Square
          onClick={() => {
            handleClick(7);
          }}
          value={state[7] }
        />
        <Square
          onClick={() => {
            handleClick(8);
          }}
          value={state[8] }
        />

</div>
</div>
     
      <Link to ='/' className="btn" onClick={handle_reset}>Reset</Link> 
     
    
    </>
  );
}

export default Border;
