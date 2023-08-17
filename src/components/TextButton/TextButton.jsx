import React from "react";
import style from "./TextButton.module.css";

export default function TextButton({ icon, size, text }) {
  return (
    <div className={style.wrapper}>
      <img src={icon} width={size} />
      <span>{text}</span>
    </div>
  );
}
