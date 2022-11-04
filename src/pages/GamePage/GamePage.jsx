import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  BitsForm,
  CorrectAnswer,
  OptionButtons,
  StyledLinkButton,
} from "../../components";

import {
  setBits,
  resetGame,
  nextRound,
  setInGame,
} from "../../features/gameSlice";

import { TEXT, BIT_LIMIT } from "./copy";

import "./gamePage.css";

export const GamePage = () => {
  const dispatch = useDispatch();
  const { inGame } = useSelector((store) => store.game);

  const [error, setError] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    dispatch(nextRound());
  }, []);

  const handleStart = (event) => {
    event.preventDefault();
    const inputValue = Number(inputRef.current.value);

    if (
      inputValue > BIT_LIMIT.MAX ||
      inputValue < BIT_LIMIT.MIN ||
      !Number(inputValue)
    ) {
      setError(TEXT.ERROR);

      inputRef.current.value = "";

      setTimeout(() => {
        setError("");
      }, 1000);
      return;
    }

    dispatch(setBits(inputValue));
    dispatch(setInGame(true));
  };

  return !inGame ? (
    <BitsForm handleStart={handleStart} error={error} inputRef={inputRef} />
  ) : (
    <main className="game-container">
      <section className="game">
        <CorrectAnswer />
        <OptionButtons />
      </section>
      <StyledLinkButton
        onClick={() => dispatch(resetGame())}
        text={TEXT.BTN_LABEL}
        route="/"
      />
    </main>
  );
};
