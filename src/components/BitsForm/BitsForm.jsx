import React from "react";

import { TEXT } from "../copy";

import "./bitsForm.css";

export const BitsForm = ({ handleStart, inputRef, error }) => {
  return (
    <form className="bits-input" onSubmit={handleStart}>
      {error ? <div className="error">{error}</div> : null}
      <label>{TEXT.FORM}</label>
      <input ref={inputRef} />
      <input className="start" value="Start" type="submit" />
    </form>
  );
};
