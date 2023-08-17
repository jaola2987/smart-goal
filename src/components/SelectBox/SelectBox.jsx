import React, { useState } from "react";
import style from "./SelectBox.module.css";
import SelectList from "../SelectList/SelectList";
import { useDispatch, useSelector } from "react-redux";
import { useSortGoals } from "../../contex/SortGoalsContext";
import { arrowDown, arrowUp } from "../../utils/svgs";
import { changeSortDirection } from "../../store/goals/goalsSlice";

export default function SelectBox({ text }) {
  const [open, setOpen] = useState(false);
  const { sortBy, increment } = useSelector((state) => state.goals);
  const dispatch = useDispatch();
  const { sortType } = useSortGoals();

  const chosenSortType = sortType.filter((el) => el.id === sortBy)[0].title;

  return (
    <div className={style.wrapper}>
      <p className={style.text}>
        <span>{text}</span>
        <span className={style.selected}>
          <span onClick={() => setOpen((prev) => !prev)}>{chosenSortType}</span>

          <span
            className={style.arrow}
            onClick={() => dispatch(changeSortDirection({ type: !increment }))}
          >
            {increment ? arrowUp : arrowDown}
          </span>
        </span>
      </p>
      {open && (
        <div className={style.popUp}>
          <SelectList closeList={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
