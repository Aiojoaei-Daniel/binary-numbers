import React from "react";
import { Link } from "react-router-dom";

import "./button.css";

export const StyledLinkButton = ({ text, route, type, onClick }) => {
  return (
    <Link className="btn" to={route} onClick={onClick} type={type}>
      {text}
    </Link>
  );
};
