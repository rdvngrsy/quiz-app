import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type Props = {
  score: number;
};

function QuizResult(props: Props) {
  const navigate = useNavigate();
  const answersState = useSelector((state: any) => state.answers);

  return (
    <div className="bg-white min-w-[1000px] w-full flex flex-col items-center p-8 rounded-3xl space-y-4 relative border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0)]">
      <h1 className="font-bold text-[50px] tracking-wider">
        PUANIN:{props.score}
      </h1>
      <button
        onClick={() => navigate("/")} 
        className="w-72 h-14 rounded-2xl bg-blue-700 text-white hover:bg-blue-300 hover:text-black font-bold text-[20px] tracking-wider shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition ease-in duration-200"
      >
        Yeniden Başla
      </button>
      <div>
        <table className="border-separate border border-slate-500 ...">
          <thead>
            <tr>
              <th className="border border-slate-600 font-bold text-[22px]">Id</th>
              <th className="border border-slate-600 font-bold text-[22px]">Soru</th>
              <th className="border border-slate-600 font-bold text-[22px]">Doğru Cevap</th>
              <th className="border border-slate-600 font-bold text-[22px]">Cevabınız</th>
            </tr>
          </thead>
          <tbody className="">
          {answersState.questions.map((questions: any, index: number) => (
          
            
            <tr className="hover:bg-blue-300" key={index}>
              <td className="border border-slate-700 p-3 text-center text-[20px]">{index+1}</td>
              <td className="border border-slate-700 p-3 font-normal text-[17px]">{questions}</td>
              <td className="border border-slate-700 p-3 bg-green-600 text-center font-semibold">{answersState.correctAnswers[index]}</td>
              <td className={`border border-slate-700 p-3 text-center font-semibold ${answersState.userAnswer[index] == answersState.correctAnswers[index] ? "bg-green-600" : "bg-red-600"}`}>{answersState.userAnswer[index]}</td>
            </tr>
      
        ))}
            
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default QuizResult;
