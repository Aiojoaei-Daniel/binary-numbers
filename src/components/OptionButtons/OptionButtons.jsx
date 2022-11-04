import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setAnswer, nextRound } from "./../../features/gameSlice";
import { getBinary } from "../../utils/getBinary";
import { ROUTES, TEXT } from "../copy";

import "./optionButtons.css";

export const OptionButtons = () => {
  const dispatch = useDispatch();

  const { numbers, route, bits, correctIndex } = useSelector(
    (store) => store.game
  );

  const handleChoose = (selectedOption) => {
    const correctAnswer = numbers[correctIndex];

    if (selectedOption === correctAnswer) {
      dispatch(setAnswer(TEXT.ANS_CORRECT));

      setTimeout(() => {
        dispatch(nextRound());
      }, 1000);
    } else {
      dispatch(setAnswer(TEXT.ANS_WRONG));

      setTimeout(() => {
        dispatch(setAnswer(""));
      }, 1000);
    }
  };

  return (
    <div className="options-container">
      {numbers.map((decimalNumber) => (
        <button
          className="option"
          key={decimalNumber}
          onClick={() => handleChoose(decimalNumber)}
        >
          {route === ROUTES.DECIMAL
            ? getBinary(decimalNumber, bits)
            : decimalNumber}
        </button>
      ))}
    </div>
  );
};
