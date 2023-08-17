import React from "react";
import TextButton from "../TextButton/TextButton";
import pencil from "../../assets/image/ic_outline-mode-edit.svg";
import trashBin from "../../assets/image/ic_outline-delete-outline.svg";
import style from "./EditButtons.module.css";

export default function EditButtons() {
  return (
    <div className={style.wrapper}>
      <TextButton icon={pencil} size={25} text={"update photo"} />
      <TextButton icon={trashBin} size={25} text={"delete"} />
    </div>
  );
}
