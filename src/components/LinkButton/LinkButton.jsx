import React from "react";
import style from "../../assets/style/globalStyle.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";

export default function LinkButton({ children, link, className }) {
  return (
    <Link to={link} className={cn(style.button, className)}>
      {children}
    </Link>
  );
}
