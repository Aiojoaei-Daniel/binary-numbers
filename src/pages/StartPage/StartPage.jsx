import React from "react";
import { useDispatch } from "react-redux";

import { StyledLinkButton } from "../../components/StyledLinkButton/StyledLinkButton";
import { setGameMod } from "../../features/gameSlice";

import { TEXT, BUTTONS_TEXT } from "./copy";

import "./startPage.css";

export const StartPage = () => {
  const dispatch = useDispatch();

  return (
    <main className="start-page-container">
      <p className="subtitle">{TEXT.SUBTITLE}</p>
      <header>
        <h1 className="title">{TEXT.TITLE}</h1>
      </header>
      <section className="options">
        {BUTTONS_TEXT.map((item) => (
          <StyledLinkButton
            key={item.route}
            text={item.label}
            route={item.route}
            onClick={() => dispatch(setGameMod(item.route))}
          />
        ))}
      </section>
    </main>
  );
};
