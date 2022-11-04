import React from "react";
import { useSelector } from "react-redux";
import { getBinary } from "../../utils/getBinary";
import { ROUTES } from "../copy";

import "./correctAnswer.css";

export const CorrectAnswer = () => {
  const { numbers, correctIndex, route, answer, bits } = useSelector(
    (store) => store.game
  );

  return (
    <div className={`correct-container ${answer}`}>
      {route === ROUTES.DECIMAL
        ? numbers[correctIndex]
        : getBinary(numbers[correctIndex], bits)}
    </div>
  );
};
