import React, { useState } from "react";
import "./styles.css"

function Square(prop){
  return (
    <button onClick={prop.onSquareClick} className="square">{prop.index}</button>
  );
}

function Board(prop){
  // const [table, setTable] = useState(Array(9).fill(null));
  // const [nxtSymbol, setNextSymbol] = useState(true);

  function handleClick(index){
    if(findWinner(prop.table) || prop.table[index] !== null){
      return;
    }

    const newTable = [...prop.table];
    if(prop.nxtSymbol){
      newTable[index] = "X";
    }
    else{
      newTable[index] = "O";
    }
    prop.onClick(newTable, index);  
  }

  const isWinner = findWinner(prop.table);
  let status;
  if(isWinner){
    let sym = prop.nxtSymbol ? "O":"X";
    status = "Winner: " + sym;
  }
  else{
    let sym = prop.nxtSymbol ? "X":"O";
    status = "Next Player: " + sym;
  }

  let elem = [];
  elem.push(<p className="status">{status}</p>);
  for (let j=0; j<3; j++){
    let inner_elem=[];
    for(let i=0; i<3; i++){
      inner_elem.push(<Square index = {prop.table[3*j + i]} onSquareClick = {() => {handleClick(3*j + i)}} />);
    }
    elem.push(<div className="board-row">{inner_elem}</div>);
  }

  return elem;
  /* The below code can be created using above 2 for loop method
  return (
  <>
    <div className="board-row">
      <p className="status">{status}</p>
      <Square index = {prop.table[0]} onSquareClick = {() => {handleClick(0)}} />
      <Square index = {prop.table[1]} onSquareClick = {() => {handleClick(1)}} />
      <Square index = {prop.table[2]} onSquareClick = {() => {handleClick(2)}} />
    </div>

    <div className="board-row">
      <Square index = {prop.table[3]} onSquareClick = {() => {handleClick(3)}} />
      <Square index = {prop.table[4]} onSquareClick = {() => {handleClick(4)}} />
      <Square index = {prop.table[5]} onSquareClick = {() => {handleClick(5)}} />
    </div>

    <div className="board-row">
      <Square index = {prop.table[6]} onSquareClick = {() => {handleClick(6)}} />
      <Square index = {prop.table[7]} onSquareClick = {() => {handleClick(7)}} />
      <Square index = {prop.table[8]} onSquareClick = {() => {handleClick(8)}} />
    </div>
  </>
  )
  */ 
}

export default function Game(){

  // const [nxtSymbol, setNextSymbol] = useState(true);
  const [gameState, setGameState] = useState([Array(9).fill(null)]);
  const [currMove, setCurrMOve] = useState(0);
  const nxtSymbol = currMove%2 === 0;
  const currTable = gameState[currMove];

  function gameClick(newTable, index){
    let newGameState = [...gameState.slice(0, currMove+1)];
    newGameState.push(newTable);
    setGameState(newGameState);    
    setCurrMOve(newGameState.length - 1);
    // setNextSymbol(!nxtSymbol);
  }
  
  const states = gameState.map((val, ind) => {
    let description;
    if(ind > 0){
      description = "Go to move #" + ind;
    }
    else{
      description = "reset the game";
    }
    return (
      <li key={ind}>
        <button onClick={() => jumpTo(ind)}>{description}</button>
      </li>
    )
  });

  function jumpTo(move){
    setCurrMOve(move);
    // setNextSymbol(move%2 === 0)
    // currTable = gameState[move];
  }

  console.log(gameState)

  return (
    <div className="game">
      <div className="game-board">
        <Board onClick = {gameClick} table = {currTable} nxtSymbol = {nxtSymbol}/>
      </div>
      <div className="game-info">
        <ol>{states}</ol>
      </div>
    </div>
  )
}

function findWinner(newArray){
  for(let i=0; i<3; i++){
    if(newArray[3*i] === newArray[3*i + 1] && newArray[3*i] === newArray[3*i + 2] && newArray[3*i] !== null){
      return true;
    }
    else if(newArray[i] === newArray[i+3] && newArray[i] === newArray[i+6] && newArray[i] !== null){
      return true;
    }
    else if(newArray[0] === newArray[4] && newArray[0] === newArray[8] && newArray[0] !== null){
      return true;
    }
    else if(newArray[2] === newArray[4] && newArray[4] === newArray[6] && newArray[4] !== null){
      return true;
    }
  }
  return false;
}

/*

#######################################################################################
Following is the first attempt to make the Tic-Tac-Toe game completely by me, it works
perfectly but it is very verbose
#######################################################################################

import { useState } from "react";

let totclicks = 0;

let gameStates = [[], [], [], [], [], [], [], [], [], []];
gameStates[0] = ["","","","","","","","","",""]


function Renderbox(prop){
  if(gameStates[9].length != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 4)}}>go to step 4</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 5)}}>go to step 5</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 6)}}>go to step 6</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 7)}}>go to step 7</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 8)}}>go to step 8</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 9)}}>go to step 9</button>
      </>
    );
  }
  else if(gameStates[8].length != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 4)}}>go to step 4</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 5)}}>go to step 5</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 6)}}>go to step 6</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 7)}}>go to step 7</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 8)}}>go to step 8</button>
      </>
    );
  }
  else if(gameStates[7] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 4)}}>go to step 4</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 5)}}>go to step 5</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 6)}}>go to step 6</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 7)}}>go to step 7</button>
      </>
    );
  }
  else if(gameStates[6] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 4)}}>go to step 4</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 5)}}>go to step 5</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 6)}}>go to step 6</button>
      </>
    );
  }
  else if(gameStates[5] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 4)}}>go to step 4</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 5)}}>go to step 5</button>
      </>
    );
  }
  else if(gameStates[4] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 4)}}>go to step 4</button>
      </>
    );
  }
  else if(gameStates[3] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      </>
    );
  }
  else if(gameStates[2] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      </>
    );
  }
  else if(gameStates[1] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      </>
    );
  }
  else {
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      </>
    );
  }
}

export default function Board() {
  const dict = ["", "", "" , "", "", "", "", "", ""];
  const [tables, setTable] = useState(dict);
  const [nextSymbol, setNextSymbol] = useState("X");
  const [winner, setWinner] = useState("");
  return ( 
    <>
      <p>{tables}</p>
      <p>{winner}</p>
      <div className="status">Next player: {nextSymbol}</div>
      <Renderbox func = {setNextSymbol} tabl = {setTable} winr = {setWinner} tostop = {winner}/>
      <div className="board-row">
        <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {0} winr  = {setWinner} tostop = {winner}/>
        <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {1} winr  = {setWinner} tostop = {winner}/>
        <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {2} winr  = {setWinner} tostop = {winner}/>
      </div>
      <div className="board-row">
      <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {3} winr  = {setWinner} tostop = {winner}/>
      <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {4} winr  = {setWinner} tostop = {winner}/>
      <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {5} winr  = {setWinner} tostop = {winner}/>
      </div>
      <div className="board-row">
      <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {6} winr  = {setWinner} tostop = {winner}/>
      <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {7} winr  = {setWinner} tostop = {winner}/>
      <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {8} winr  = {setWinner} tostop = {winner}/>
      </div>
    </>
  )
}

function resetGame(setTable, setNextSymbol, setWinner, toStop, state){
  // if(state == 0){
  //   const ntb = ["", "", "", "", "", "", "", "", ""];
  //   totclicks = 0;
  //   console.log(gameStates);
  //   for(let i=0; i<gameStates.length; i++){
  //     gameStates[i].length = 0;
  //   }
  //   return setTable(ntb), setNextSymbol("X"), setWinner("");
  // }
  const ntb = gameStates[state];
  let isWinner = winnerFinder(ntb);
  totclicks = state;
  // for(let i=state+1; i<gameStates.length; i++){
  //   gameStates[i].length=0;
  // }
  if(state%2 == 0){
    if(isWinner){
      return setTable(ntb), setNextSymbol("X"), setWinner("O");
    }
    else {
      return setTable(ntb), setNextSymbol("X"), setWinner("");
    }
  }
  else{
    if(isWinner){
      return setTable(ntb), setNextSymbol("O"), setWinner("X");
    }
    else {
      return setTable(ntb), setNextSymbol("O"), setWinner("");
    }
  }
}

function winnerFinder(newArray){
  for(let i=0; i<3; i++){
    if(newArray[3*i] === newArray[3*i + 1] && newArray[3*i] === newArray[3*i + 2] && newArray[3*i] != ""){
      return true;
    }
    else if(newArray[i] === newArray[i+3] && newArray[i] === newArray[i+6] && newArray[i] !== ""){
      return true;
    }
    else if(newArray[0] === newArray[4] && newArray[0] === newArray[8] && newArray[0] !== ""){
      return true;
    }
    else if(newArray[2] === newArray[4] && newArray[4] === newArray[6] && newArray[4] !== ""){
      return true;
    }
  }
  return false;
}

function handleClick(setNextSymbol, setTable, tables, index, setWinner){
  // alert("clicked");
  totclicks++;
  const newArray = [...tables];
  if(totclicks%2 == 0){
    newArray[index] = "O";
    gameStates[totclicks] = newArray;
    for(let i=totclicks+1; i<gameStates.length; i++){
      gameStates[i].length=0;
    }
    let isWinner = winnerFinder(newArray);
    // console.log("winnerfinder invoked for if");
    if (isWinner){
      return setNextSymbol("X"), setTable(newArray), setWinner("O");
    }
    else {
      return setNextSymbol("X"), setTable(newArray);
    }
  }
  newArray[index] = "X";
  gameStates[totclicks] = newArray;
  for(let i=totclicks+1; i<gameStates.length; i++){
    gameStates[i].length=0;
  }
  let isWinner = winnerFinder(newArray);
  // console.log("winnerfinder invoked for else");
  if(isWinner){
    return setNextSymbol("O"), setTable(newArray), setWinner("X");
  }
  else {
    return setNextSymbol("O"), setTable(newArray);
  }
}

function nxtSymbol({nextSymbol, setNextSymbol}){
  if(totclicks%2 == 0) {
    setNextSymbol("X");
    return nextSymbol; 
  }
  setNextSymbol("O");
  return nextSymbol;
}

function Square(prop){
  if(prop.tostop == false && prop.tables[prop.index] == "") {
    return <button className="square" onClick={() => {handleClick(prop.func, prop.tabl, prop.tables, prop.index, prop.winr)}}>{prop.tables[prop.index]}</button>;
  }
  else{
    return <button className="square">{prop.tables[prop.index]}</button>;
  }
}

*/