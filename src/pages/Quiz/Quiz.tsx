import { useEffect, useState } from "react";
import * as api from "../../api/api";
import { useParams } from "react-router-dom";
import QuestionsCards from "../../components/QuestionsCard/QuestionsCard";
import { QuestionsDataInfo } from "../../models/QuestionsData/questionsDataResponse";
import QuizResult from "../../components/QuizResult/QuizResult";

type Props = {};

const Quiz = ({}: Props) => {
  const { questions } = useParams();
  const [questionsData, setQuestionsData] = useState<QuestionsDataInfo[]>([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState(false);

  useEffect(() => {
    const getData = async () => {
      if (questions) {
        const data = await api.fetchQuizData(parseInt(questions));
        setQuestionsData(data);
      }
    };

    getData();
  }, []);

  console.log(questionsData);

  return (
    <div className="">
      {next ? (
        <QuizResult score={score} />
      ) : (
        <QuestionsCards
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          next={next}
          setNext={setNext}
        />
      )}
    </div>
  );
};

export default Quiz;
