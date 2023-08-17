import React from "react";
import style from "./SelectList.module.css";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { reSortBy, changeSortDirection } from "../../store/goals/goalsSlice";
import { arrowDown, arrowUp } from "../../utils/svgs";
import { useSortGoals } from "../../contex/SortGoalsContext";

export default function SelectList({ closeList }) {
  const { sortBy } = useSelector((state) => state.goals);
  const { sortType, toggleTheme } = useSortGoals();
  const dispatch = useDispatch();

  const chooseSortType = (el) => {
    console.log(el);
    closeList();
    dispatch(changeSortDirection({ type: el.increment }));
    dispatch(reSortBy({ type: el.id }));
  };

  const chooseSortDirection = (el) => {
    toggleTheme(el);
  };

  return (
    <ul className={style.list}>
      {sortType.map((el) => {
        return (
          <li
            key={el.id}
            className={cn(
              style.listItem,
              sortBy === el.title ? style.active : ""
            )}
          >
            <span onClick={() => chooseSortType(el)}>{el.title}</span>
            <span
              className={style.arrow}
              onClick={() => chooseSortDirection(el)}
            >
              {el.increment ? arrowUp : arrowDown}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
