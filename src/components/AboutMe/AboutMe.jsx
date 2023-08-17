import React from "react";
import style from "./AboutMe.module.css";
import UserPhoto from "../UserPhoto/UserPhoto";

export default function AboutMe(Content) {
  return () => {
    return (
      <div className={style.wrapper}>
        <UserPhoto width={200} height={200} />
        <Content />
      </div>
    );
  };
}
