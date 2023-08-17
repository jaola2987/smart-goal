import React from "react";
import TextButton from "../TextButton/TextButton";
import pencil from "../../assets/image/ic_outline-mode-edit.svg";
import style from "./UserNameAndDescription.module.css";

export default function UserNameAndDescription() {
  return (
    <div className={style.wrapper}>
      <h2>Volha Ivanova</h2>
      <p>
        I am a front-end developer working in IT since 2016. During this time I
        have contributed to different projects and have versatile experience. I
        am good at learning new skills without the need of micromanagement and I
        can prioritize tasks and use time wisely to meet deadlines.
      </p>
      <TextButton icon={pencil} size={25} text={"edit profile"} />
    </div>
  );
}
