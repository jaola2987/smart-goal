import React from "react";
import style from "./Main.module.css";
import Header from "../components/Header/Header";

const BUTTONS = [
  { text: "Edit profile", link: "/profile" },
  { text: "Add goal", link: "/addgoal" },
  { text: "Sing in", link: "/goals" },
];

export default function Main() {
  return (
    <>
      <Header buttons={BUTTONS} />
      <div className={style.wrapper}>
        <div>
          <p className={style.title}>Smart Goal</p>
          <p className={style.description}>
            It's never too late to set a new goal or find a new dream...
          </p>
        </div>
        <div className={style.steps}>
          <p className={style.stepItem}>
            <span className={style.numbers}>1</span>
            <span>creat a wish</span>
          </p>
          <p className={style.stepItem}>
            <span className={style.numbers}>2</span>
            <span>share the link with your friends</span>
          </p>
          <p className={style.stepItem}>
            <span className={style.numbers}>3</span>
            <span>bring to life your wish</span>
          </p>
        </div>
      </div>
    </>
  );
}
