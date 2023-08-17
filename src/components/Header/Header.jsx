import React from "react";
import Logo from "../Logo/Logo";
import ButtonsNavigation from "../ButtonsNavigation/ButtonsNavigation";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import style from "./Header.module.css";
import UserPhoto from "../UserPhoto/UserPhoto";

export default function Header({ buttons }) {
  return (
    <div className={style.header}>
      <Logo />
      <div className={style.header}>
        <ButtonsNavigation buttons={buttons} />
        <ThemeSwitch />
        <UserPhoto width={40} height={40} />
      </div>
    </div>
  );
}
