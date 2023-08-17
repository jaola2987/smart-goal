import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Steps from "../components/Steps/Steps";
import { useParams } from "react-router-dom";
import StepsSkeleton from "../components/Steps/StepsSkeleton";
import StepsList from "../components/StepsList/StepsList";
import { useDispatch } from "react-redux";
import { addGoal } from "../store/goals/goalsSlice";

const BUTTONS = [
  { text: "Edit profile", link: "/profile" },
  { text: "Add goal", link: "/addgoal" },
  { text: "Sing in", link: "/goals" },
];

export default function Goal() {
  const [goal, setGoal] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://64b6938adf0839c97e15cf8a.mockapi.io/goals/${params.id}`)
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        setLoading(false);
        setGoal(json);
      })
      .catch((err) => new Error(err));
  }, []);

  const completeStep = useCallback(
    (stepId, checked) => {
      const updetedStep = goal.steps.find((step) => step.id == stepId);
      updetedStep.yourStep = false;
      updetedStep.finished = checked;
      setGoal((prev) => ({ ...prev, updetedStep }));
    },
    [goal]
  );

  const changeCurrentGoal = useCallback(
    (stepId, checked) => {
      const updetedStep = goal.steps.find((step) => step.id == stepId);
      updetedStep.yourStep = checked;
      setGoal((prev) => ({ ...prev, updetedStep }));
    },
    [goal]
  );

  const newTask = {
    id: "11",
    title: "Move to Dubai111",
    description:
      "I am going to move to Dubai up to November 2023. To reach that I would like to find a job in Dubai.",
    creationTime: "1327571510417",
    completedOn: 30,
    completed: false,
    image:
      "https://karakib.net/wp-content/uploads/2021/12/medium-539710586106639545.jpg",
    steps: [
      {
        id: 1,
        title: "What Language Do They Speak in Dubai?",
        description:
          "Dubai is a modern city built out of the desert in the country called the United Arab Emirates. This country is in the Middle East and in Asia. Dubai is both a city and an Emirate and it is well known as a popular luxury tourism destination. ",
        yourStep: false,
        finished: true,
      },
      {
        id: 2,
        title: "What Language Do They Speak in Dubai?",
        description:
          "Dubai is a modern city built out of the desert in the country called the United Arab Emirates. This country is in the Middle East and in Asia. Dubai is both a city and an Emirate and it is well known as a popular luxury tourism destination. ",
        yourStep: false,
        finished: false,
      },
      {
        id: 3,
        title: "What Language Do They Speak in Dubai?",
        description:
          "Dubai is a modern city built out of the desert in the country called the United Arab Emirates. This country is in the Middle East and in Asia. Dubai is both a city and an Emirate and it is well known as a popular luxury tourism destination. ",
        yourStep: false,
        finished: false,
      },
      {
        id: 4,
        title: "What Language Do They Speak in Dubai?",
        description:
          "Dubai is a modern city built out of the desert in the country called the United Arab Emirates. This country is in the Middle East and in Asia. Dubai is both a city and an Emirate and it is well known as a popular luxury tourism destination. ",
        yourStep: false,
        finished: true,
      },
      {
        id: 5,
        title: "What Language Do They Speak in Dubai?",
        description:
          "Dubai is a modern city built out of the desert in the country called the United Arab Emirates. This country is in the Middle East and in Asia. Dubai is both a city and an Emirate and it is well known as a popular luxury tourism destination. ",
        yourStep: true,
        finished: false,
      },
      {
        id: 6,
        title: "What Language Do They Speak in Dubai?",
        description:
          "Dubai is a modern city built out of the desert in the country called the United Arab Emirates. This country is in the Middle East and in Asia. Dubai is both a city and an Emirate and it is well known as a popular luxury tourism destination. ",
        yourStep: false,
        finished: false,
      },
      {
        id: 7,
        title: "What Language Do They Speak in Dubai?",
        description:
          "Dubai is a modern city built out of the desert in the country called the United Arab Emirates. This country is in the Middle East and in Asia. Dubai is both a city and an Emirate and it is well known as a popular luxury tourism destination. ",
        yourStep: false,
        finished: false,
      },
    ],
  };

  const handleqwe = () => dispatch(addGoal(newTask));

  return (
    <>
      <Header buttons={BUTTONS} />
      <button onClick={handleqwe}>qwe</button>
      {loading ? (
        <StepsSkeleton />
      ) : (
        <>
          <Steps goalSteps={goal.steps} />
          <StepsList
            goalSteps={goal.steps}
            completeStep={completeStep}
            changeCurrentGoal={changeCurrentGoal}
          />
        </>
      )}
    </>
  );
}
