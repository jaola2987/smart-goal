import { filter } from "../../store/goals/goalsSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./GoalsFilter.module.css";
import cn from "classnames";

const LIST = [
  { id: "all", title: "All goals" },
  { id: "completed", title: "You reach" },
  { id: "not completed", title: "In progress" },
];

export default function GoalsFilter() {
  const dispatch = useDispatch();
  const { completed } = useSelector((state) => state.goals);
  return (
    <div className={style.wrapper}>
      {LIST.map((el) => (
        <div
          className={cn(
            style.element,
            completed === el.id ? style.active_element : ""
          )}
          key={el.id}
          onClick={() => dispatch(filter({ type: el.id }))}
        >
          {el.title}
        </div>
      ))}
    </div>
  );
}
