import React from 'react';
import Board from './component/board'; 

function Game() {
  return (
    <div className="mainBody h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-black mb-4">Tic-Tac-Toe Game</h1>
        <p className="text-lg text-black-500">by Bintang</p>
        <div className='pt-20 pb-4'>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
      </div>
      <h3 className="text-4xl font-bold text-black mb-4"> Enjoy The Game😊😊😊</h3>
    </div>
  );
}

export default Game;
