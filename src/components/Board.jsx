import React, { useState } from "react";

const Square = ({ value, handleSquareClick }) => {
  return (
    <div>
      <button
        className="border-2 border-vulcan-700 px-10 py-10"
        onClick={handleSquareClick}
      >
        {value}
      </button>
    </div>
  );
};

const Board = () => {
  const [squares, setSquares] = useState(new Array(9).fill(null));

  function handleClick(i) {
    const newSquares = [];
    newSquares[i] = "X";
    setSquares(newSquares);
  }

  return (
    <div className="flex bg-vulcan-900 px-4 py-4">
      <div className="space-y-2">
        <Square value={squares[0]} handleSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} handleSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} handleSquareClick={() => handleClick(2)} />
      </div>
      <div className="space-y-2">
        <Square value={squares[3]} handleSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} handleSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} handleSquareClick={() => handleClick(5)} />
      </div>
      <div className="space-y-2">
        <Square value={squares[6]} handleSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} handleSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} handleSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
