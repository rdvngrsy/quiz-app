import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { resetState } from "../../store/slices/answersSlice";

type Props = {};

const Introduce = ({}: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const TOTAL_QUESTIONS = 10;
  const startQuiz = () => {
    navigate(`/quiz/${TOTAL_QUESTIONS}`);
  };

  useEffect(() => {
    dispatch(resetState());
  }, []);

  return (
    <div className="">
      <div className="bg-white max-w-[1000px] w-full flex flex-col items-center p-8 rounded-3xl border-4 border-black space-y-4 shadow-[5px_5px_0px_0px_rgba(0,0,0)]">
        <h1 className="font-bold text-[50px] tracking-wider">
          QUIZ UYGULAMASI
        </h1>
        <p className="font-normal text-[30px]">
          Quiz uygulamasına hoşgeldiniz.
        </p>
        <ul className="text-center">
          <li>
            <h2 className="font-bold text-[30px] tracking-wider">KURALLAR</h2>
          </li>
          <li className="font-normal text-[20px]">
            Quiz toplamda 10 sorudan oluşmaktadır, her sorunun tek bir cevabı
            vardır.
          </li>
          <li className="font-normal text-[20px]">
            Her sorunun süresi 30 saniyedir, ilk 10 saniye cevap şıklarına
            tıklanamayacak olup 10. saniyeden sonra tıklanabilecektir.
          </li>
          <li className="font-normal text-[20px]">
            Geçmiş sorulara dönülmemektedir.
          </li>
        </ul>
        <button
          onClick={startQuiz}
          className="w-80 h-16 rounded-2xl bg-blue-600 text-white hover:bg-blue-300 hover:text-black font-bold text-[20px] tracking-wider transition ease-in duration-200"
        >
          Başla
        </button>
      </div>
    </div>
  );
};

export default Introduce;
