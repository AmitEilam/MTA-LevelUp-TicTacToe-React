import React from "react";
import Board from "./Board";
import { useState } from "react";

const MainGame = () => {
  const [turn, setTurn] = useState("X");
  const [isWinner, setWinner] = useState("");

  const changeTurn = (player) => {
    setTurn(player);
  };
  const displayWinner = (message) => {
    setWinner(message);
  };

  return (
    <div className="main">
      <h1>TIC TAC TOE</h1>
      <h1> {isWinner}</h1>
      <div>
        <Board
          curTurn={turn}
          swapTurn={changeTurn}
          winner={displayWinner}
        ></Board>
      </div>
      <h1>its {turn} turn!</h1>
    </div>
  );
};

export default MainGame;
