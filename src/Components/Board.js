import React from "react";
import Cell from "./Cell";
import "./Board.css";
import { useState, useEffect } from "react";

const patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Board = (props) => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState(props.curTurn);

  const restart = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]); // reset the board to an empty state
    setTurn("X"); // reset the turn to the value passed in as a prop
    props.swapTurn(props.curTurn); // reset the turn in the parent component
    props.winner(""); // reset the winner message in the parent component
  };

  useEffect(() => {
    if (!winnerCheak()) {
      isTie();
    }
  }, [board]);

  const cellClicked = (ind) => {
    setBoard(
      board.map((val, index) => {
        if (ind === index && val === "") {
          return turn;
        } else {
          return val;
        }
      })
    );

    if (turn === "X") {
      setTurn("O");
      props.swapTurn("O");
    } else {
      setTurn("X");
      props.swapTurn("X");
    }
  };

  const winnerCheak = () => {
    let isWin = false;
    patterns.forEach((curPat) => {
      const fPlayer = board[curPat[0]];
      if (fPlayer === "") {
        //If fPlayer is an empty string, the loop continues to the next iteration.
        return;
      }

      let win = true;
      curPat.forEach((ind) => {
        if (board[ind] != fPlayer) {
          win = false;
        }
      });

      if (win) {
        isWin = true;
        if (turn === "X") {
          props.winner("the 0 player win!!!");
        } else {
          props.winner("the x player win!!!");
        }
      }
    });

    return isWin;
  };

  const isTie = () => {
    let tie = true;
    board.map((val) => {
      if (val === "") {
        tie = false;
      }
    });
    if (tie) {
      props.winner("it's a tie!");
    }
    {
    }
  };

  return (
    <div className="game-board">
      {board.map((val, index) => {
        return (
          <Cell turn={turn} val={val} ind={index} clicked={cellClicked}></Cell>
        );
      })}

      <button onClick={restart}>Restart</button>
    </div>
  );
};

export default Board;
