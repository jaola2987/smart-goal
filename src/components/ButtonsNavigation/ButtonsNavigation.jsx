import React from "react";
import globalStyle from "../../assets/style/globalStyle.module.css";
import style from "./ButtonsNavigation.module.css";
import LinkButton from "../LinkButton/LinkButton";
import { useTheme } from "../../contex/ThemeContext";

export default function GroupButtons({ buttons }) {
  const { lightTheme } = useTheme();
  return (
    <div className={style.buttonWrapper}>
      {buttons.map((button, index) => {
        return (
          <LinkButton
            className={
              lightTheme ? globalStyle.darkButton : globalStyle.lightButton
            }
            key={index}
            link={button.link}
          >
            {button.text}
          </LinkButton>
        );
      })}
    </div>
  );
}
