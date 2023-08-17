import React, { useState } from "react";
import InputField from "../Forms/FormFields/InputField";
import style from "./Search.module.css";
import { search, close } from "../../utils/svgs";
import { useSearchGoal } from "../../contex/SearchGoalsContext";

export default function Search() {
  const [open, setOpen] = useState(false);
  const { searchWord, handleSearch } = useSearchGoal();

  return (
    <div className={style.wrapper}>
      <span
        className={style.searchIcon}
        onClick={() => setOpen((prev) => !prev)}
      >
        {search}
      </span>
      {open && (
        <div className={style.inputWrapper}>
          <InputField
            inputPlaceholder="Search"
            inputValue={searchWord}
            handleChange={handleSearch}
            type="text"
            className={style.paddingRInInput}
          />
          {!!searchWord && (
            <span className={style.closeIcon} onClick={() => handleSearch("")}>
              {close}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
