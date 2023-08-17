import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import style from "./GoalList.module.css";
import SelectBox from "../SelectBox/SelectBox";
import CardSkeleton from "../Card/CardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoals } from "../../store/goals/goalsSlice";
import { SortGoalsProvider } from "../../contex/SortGoalsContext";
import GoalsFilter from "../Filter/GoalsFilter";
import Search from "../Search/Search";
import { useSearchGoal } from "../../contex/SearchGoalsContext";

export default function GoalList() {
  const { goals, loading, sortBy, increment, completed } = useSelector(
    (state) => state.goals
  );
  const dispatch = useDispatch();
  const { searchWord } = useSearchGoal();

  useEffect(() => {
    dispatch(getAllGoals({ sortBy, increment, completed }));
  }, [sortBy, increment, completed]);

  const seartedGoals = goals.filter((el) =>
    el.title.toLocaleLowerCase().includes(searchWord)
  );

  return (
    <div>
      <h2 className={style.section_title}>My goals</h2>

      <Search />

      <div className={style.sortAndFilterWrapper}>
        <GoalsFilter />
        <SortGoalsProvider>
          <SelectBox text={"Select by "} />
        </SortGoalsProvider>
      </div>

      <div className={style.wrapper}>
        {loading
          ? [...new Array(5)].map((_, index) => <CardSkeleton key={index} />)
          : seartedGoals.map((goal) => <Card key={goal.id} item={goal} />)}
      </div>
    </div>
  );
}
