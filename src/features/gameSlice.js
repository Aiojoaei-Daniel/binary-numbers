import { createSlice } from "@reduxjs/toolkit";

import { getRandomNumbers } from "../utils/getRandomNumbers";

const getRandomIndex = (numbersCount = 3) => {
  return Math.floor(Math.random() * numbersCount);
};

const initialState = {
  numbers: getRandomNumbers(),
  correctIndex: getRandomIndex(),
  route: "",
  answer: "",
  bits: 4,
  inGame: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setBits: (state, { payload }) => {
      state.bits = payload;
    },
    setInGame: (state, { payload }) => {
      state.inGame = payload;
    },
    setGameMod: (state, { payload }) => {
      state.route = payload;
    },
    setAnswer: (state, { payload }) => {
      state.answer = payload;
    },
    nextRound: (state) => {
      state.answer = "";
      state.numbers = getRandomNumbers(state.bits);
      state.correctIndex = getRandomIndex();
    },
    resetGame: (state) => {
      state.route = "";
      state.answer = "";
      state.numbers = getRandomNumbers(state.bits);
      state.correctIndex = getRandomIndex();
      state.inGame = false;
    },
  },
});

export const {
  setBits,
  setGameMod,
  setAnswer,
  setInGame,
  resetGame,
  nextRound,
} = gameSlice.actions;
export default gameSlice.reducer;
