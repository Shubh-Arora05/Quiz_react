import { useState } from "react";
import Square from "./Square";

function MultiPlayer(){
    const [state, setstate] = useState(Array(9).fill(null));
    const [copystate, setcopystate] = useState(Array(9).fill(null));
    const [turn, setturn] = useState(0);

    // function func(){
    //     for(let i = 0 ;i<9 ;i++)
    //     copystate[i] = i ;
    // }

    const check_winner = ()=>{

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

          for(let i of winner_logic){
            const [a,b,c] = i ;
            if(state[a] !== null && state[a] === state[b]  && state[b] === state[c]){
                return state[a];
            }
          }

          return null;
    }

    const handle_click = (i) =>{


        let winner = check_winner();

        if(winner || state[i]){
            return ;
        }

        let copy_state = [...state];
        copy_state[i] = turn ?'x':'o';
        setturn(!turn);
        setstate(copy_state);
        
        
    }

    const computer_chance = (i) =>{

        

        if(copystate[i]){
            return ;
        }

        let cop_state = [...copystate];
        cop_state.splice(i, 1) ;
        console.log(copystate);
        console.log(cop_state);
        
       
        
        let randomIndex = Math.floor(Math.random() * cop_state.length);

        // Remove the element at the random index
        cop_state = cop_state.splice(randomIndex, 1);
        setcopystate(cop_state);
        // console.log(copystate);

        let co_state = [...state];
        co_state[randomIndex] = turn ?'x':'o'; 
        setturn(!turn);
        setstate(co_state);

    }

    const get_result = () =>{

        let winner = check_winner();
        if(winner === null && !state.includes(null)){
            return 'Game is over';
        }
        else if(winner !== null){
           return `Player ${winner} is a winner`;
        }
        else if(turn){
            return `Player X turn's `;
        }
        else{
            return `Player O turn's `;
        }


    }
    
    return(
        <>
        <h1>{get_result()}</h1>
        <div className="row">
            <Square value = {state[0]} onClick = {()=>{handle_click(0)
                computer_chance(0);
            }} ></Square>
            <Square value = {state[1]} onClick = {()=>{handle_click(1);
                 computer_chance(1);
            }
            }></Square>
            <Square value = {state[2]} onClick = {()=>{handle_click(2);
             computer_chance(2);
            }
            }></Square>
        </div>
        <div className="row">
            <Square value = {state[3]} onClick = {()=>{handle_click(3);
                 computer_chance(3);
            }}></Square>
            <Square value = {state[4]} onClick = {()=>{handle_click(4);
                 computer_chance(4);
            }
        }></Square>
            <Square value = {state[5]} onClick = {()=>{handle_click(5);
                 computer_chance(5);
            }
        }></Square>
        </div>
        <div className="row">
            <Square value = {state[6]} onClick = {()=>{handle_click(6);
             computer_chance(6);
            }
            }></Square>
            <Square value = {state[7]} onClick = {()=>{handle_click(7);
             computer_chance(7);
            }
            }></Square>
            <Square value = {state[8]} onClick = {()=>{handle_click(8);
             computer_chance(8);
            }
            }></Square>
        </div>
        </>

    )
}

export default MultiPlayer ;