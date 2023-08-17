import React from "react";
import logo from "../../assets/image/logo.svg";
import logoDark from "../../assets/image/logo_dark.svg";
import { useTheme } from "../../contex/ThemeContext";

export default function Logo() {
  const { lightTheme } = useTheme();
  return (
    <div>
      <img src={lightTheme ? logoDark : logo} />
    </div>
  );
}
