import React, { useEffect, useState } from "react";
import { QuestionsDataInfo } from "../../models/QuestionsData/questionsDataResponse";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  setCorrectAnswers,
  setQuestions,
  setUserAnswer,
} from "../../store/slices/answersSlice";
import "./QuestionsCard.css";

type Props = {
  questionsData: QuestionsDataInfo[];
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  next: boolean;
  setNext: React.Dispatch<React.SetStateAction<boolean>>;
};

const QuestionsCard = (props: Props) => {
  const [timer, setTimer] = useState(30);
  const dispatch = useDispatch<AppDispatch>();

  const approvedChoice = (e: any) => {
    if (timer > 20) return;
    const checkAnswer =
      e.currentTarget.value == props.questionsData[props.count]?.correct_answer;
    if (checkAnswer) {
      props.setScore(props.score + 10);
    }
    dispatch(setUserAnswer(e.currentTarget.value));

    props.setCount(props.count + 1);

    if (props.count == 9) props.setNext(true);
    setTimer(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer == 0 && props.count < 10) {
        props.setCount(props.count + 1);
        dispatch(setUserAnswer(""));
        setTimer(30);
      } else if (props.count >= 10) {
        props.setNext(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  useEffect(() => {
    if (props.questionsData[props.count]) {
      dispatch(setQuestions(props.questionsData[props.count].body));
      dispatch(
        setCorrectAnswers(props.questionsData[props.count].correct_answer)
      );
    }

  }, [props.count, props.questionsData]);

  return (
    <div>
      <div className="bg-white max-w-[1000px] w-full flex flex-col items-center p-8 rounded-3xl space-y-4 relative border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0)]">
        <div
          className={`absolute mt-[-115px] w-40 h-40 font-bold text-[45px] flex justify-center items-center rounded-full border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0)] ${
            timer < 10
              ? "bg-red-500 text-white heartbeat"
              : "bg-white text-black"
          }`}
        >
          {timer}
        </div>
        <div className="font-normal text-[30px] pb-5 pt-9 ">
          {props.count + 1}/10 - {props.questionsData[props.count]?.body}?
        </div>
        {props.questionsData[props.count]?.answers?.map((answer, index) => (
          <button
            className={`w-full h-16 rounded-2xl bg-blue-700 text-white hover:bg-blue-300 hover:text-black font-bold text-[25px] tracking-wider shadow-[5px_5px_0px_0px_rgba(0,0,0)]
            ${
              timer > 20 ? "opacity-50 cursor-not-allowed" : ""
            } transition ease-in duration-200`}
            onClick={approvedChoice}
            key={index}
            value={answer}
            disabled={timer > 20}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionsCard;
