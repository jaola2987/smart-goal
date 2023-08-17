import React from "react";
import style from "./FormField.module.css";

export default function TextareaField({
  fieldLable,
  textareaPlaceholder = "",
  textareaValue,
  handleChange,
  required,
  rows = "4",
}) {
  return (
    <div className={style.wrapper}>
      <label className={style.fieldLable}>
        {fieldLable}
        {required && <sup>*</sup>}
      </label>
      <textarea
        className={style.inputField}
        value={textareaValue}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        placeholder={textareaPlaceholder}
        rows={rows}
      />
    </div>
  );
}
