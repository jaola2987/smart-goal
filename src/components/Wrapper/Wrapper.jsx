import React from "react";
import { useTheme } from "../../contex/ThemeContext";
import style from "./Wrapper.module.css";
import cn from "classnames";

export default function Wrapper({ children }) {
  const { lightTheme } = useTheme();

  return (
    <div
      className={cn(
        lightTheme ? style.white_theme : style.black_theme,
        style.wrapper
      )}
    >
      {children}
    </div>
  );
}
