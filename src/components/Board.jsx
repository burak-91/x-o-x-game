import React, { useState,useEffect } from "react";
import Square from "./Square";
import {Container,Row,Button,PlayerTurn} from './board.style'
import { WinnerLogic } from "./winnerLogic";



const Board = () => {
  const [board, setBoard] = useState([Array(9).fill('')]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const handleClick = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }

        return val;
      })
    );
  };

  const checkWin = () => {
    WinnerLogic.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(''));
    setPlayer("O");
    setResult({ winner: "none", state: "none" });
  };


  return (
    <div>
       <PlayerTurn>Turn: {player}</PlayerTurn>
    <Container> 
          <Row>
            <Square onClick={() => handleClick(0)} value={board[0]} />
            <Square onClick={() => handleClick(1)} value={board[1]} />
            <Square onClick={() => handleClick(2)} value={board[2]} />
          </Row>
          <Row>
            <Square onClick={() => handleClick(3)} value={board[3]} />
            <Square onClick={() => handleClick(4)} value={board[4]} />
            <Square onClick={() => handleClick(5)} value={board[5]} />
          </Row>
          <Row>
            <Square onClick={() => handleClick(6)} value={board[6]} />
            <Square onClick={() => handleClick(7)} value={board[7]} />
            <Square onClick={() => handleClick(8)} value={board[8]} />
          </Row>
    </Container>
        <Button onClick={restartGame}>Restart Game</Button>
    </div>
  );
};

export default Board;
