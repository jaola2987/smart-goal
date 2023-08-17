import React from "react";
import { useTheme } from "../../contex/ThemeContext";
import Checkbox from "../Forms/FormFields/Checkbox";

const ThemeSwitch = () => {
  const { lightTheme, toggleTheme } = useTheme();
  return (
    <label>
      <Checkbox checked={lightTheme} handleChange={toggleTheme} />
      <span />
    </label>
  );
};

export default ThemeSwitch;
