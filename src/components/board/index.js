import React, { useState } from "react";
import Squareboard from "../square";
import Lottie from "lottie-react";
import newAnimation from "../../assets/newAnimation.json"



function Board(){
const [state, setState] = useState(Array(9).fill(null));
const[isXturn, setIsXturn] = useState(true);
const checkWinner = ()=>{
    const winnerLogic= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let logic of winnerLogic){
        const[a,b,c] = logic;
        if (state[a] !== null && state[a] === state[b] && state[a] === state[c]){
return true;
        }
        
        
    }
    return false;
   
};

const isWinner= checkWinner();
let status
if (isWinner) {
    status = `Winner: ${!isXturn ? "X ": "0"}`;
  } else {
   
  }

  
  const handleRestart = () => {
    setIsXturn(true)
    setState(Array(9).fill(null))
  }

const handleClick = (index) => {

    const copyState = [...state];
    copyState[index] = isXturn ? "X ": "0";
    setState(copyState);
    setIsXturn(!isXturn);
}

function whoIsNext() {
    if (isWinner) {
      return 'Won ' + isWinner;
    } else if (state.includes(null)) { // Not yet full board
      return 'Next move: ' + (isXturn ? 'X' : 'O');
    } else if (!isXturn){ // Board is full -- it is a tie
      return 'Tie';
    }
  }


    return(
       <div>
        <h3 className="heading">Tic-Tac-Toe Board</h3>
        <div className="board_wrap">
            
          { isWinner?<div className="win_sec">
           <div className="anim"><Lottie animationData={newAnimation} loop={true} />;</div>
            <h3> {status}</h3>  <button className="btn" onClick={handleRestart}>Restart Game</button>
            </div>:
            <div className="boardcontainer_wrap">
             <div className="boardcontainer">
             <h4 className="hdr">{whoIsNext()}</h4>
                <div className="board_row">
                <Squareboard onClick={()=> handleClick(0)} value={state[0]}/>
                <Squareboard   onClick={()=> handleClick(1)} value={state[1]}/>
                <Squareboard   onClick={()=> handleClick(2)} value={state[2]}/>
            </div>
            <div className="board_row">
            <Squareboard  onClick={()=> handleClick(3)} value={state[3]}/>
            <Squareboard  onClick={()=> handleClick(4)} value={state[4]}/>
            <Squareboard  onClick={()=> handleClick(5)} value={state[5]}/>
            </div>
            <div className="board_row nobder">
            <Squareboard  onClick={()=> handleClick(6)} value={state[6]}/>
            <Squareboard  onClick={()=> handleClick(7)} value={state[7]}/>
            <Squareboard  onClick={()=> handleClick(8)} value={state[8]}/>
            </div>
            </div>
            </div>
}
        </div>
       </div>
    )
}

export default Board;