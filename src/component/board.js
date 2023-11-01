import React from 'react';
import { connect } from 'react-redux';
import { makeMove, resetGame } from '../redux/reducer';
import Square from './square';
import calculateWinner from '../calculateWinner';

function Board(props) {
  const { squares, nextPlayer, makeMove, resetGame } = props;

  function selectSquare(square) {
    if (squares[square] || calculateWinner(squares)) {
      return;
    }
    makeMove(square);
  }

  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => selectSquare(i)} />;
  }

  function renderBoard() {
    const board = [];
    for (let row = 0; row < 3; row++) {
      const squaresInRow = [];
      for (let col = 0; col < 3; col++) {
        squaresInRow.push(renderSquare(3 * row + col));
      }
      board.push(
        <div key={row} className="board-row">
          {squaresInRow}
        </div>
      );
    }
    return board;
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner : ${winner}`
    : squares.every(Boolean)
    ? `You Guys Are Equal Don't Fight`
    : `Next Player : ${nextPlayer}`;

  return (
    <div className="board w-full max-w-md mx-auto flex flex-col justify-center items-center rounded-2xl p-6 shadow-2xl">
      <div className="font-bold text-lg mb-4"> {status}</div>
      {renderBoard()}
      <button
        className="reset mt-4 font-semibold py-2 px-4 rounded-lg"
        onClick={resetGame}
      >
        Restart Game
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    squares: state.squares,
    nextPlayer: state.nextPlayer,
  };
}

export default connect(mapStateToProps, { makeMove, resetGame })(Board);
