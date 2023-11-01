import calculateWinner from "../calculateWinner";

const initialState = {
  squares: Array(9).fill(null),
  nextPlayer: "X",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MAKE_MOVE":
      if (state.squares[action.payload] || calculateWinner(state.squares)) {
        return state;
      }

      const newSquares = [...state.squares];
      newSquares[action.payload] = state.nextPlayer;
      return {
        ...state,
        squares: newSquares,
        nextPlayer: state.nextPlayer === "X" ? "O" : "X",
      };
    case "RESET":
      return initialState; 
    default:
      return state;
  }
};

export const makeMove = (index) => {
  return {
    type: "MAKE_MOVE",
    payload: index,
  };
}

export const resetGame = () => {
  return {
    type: "RESET",
  };
};

export default rootReducer;
