"use client";
import styled from "@emotion/styled";
import HomeButton from "./(result)/HomeButton";
import Loader from "./Loader";
import { StoredQuestion } from "@/type/StoredQuestion";
import { QuestionBox } from "./(result)/QuestionBox";

interface Props {
  totalCount: number;
  answerCount: number;
  loading: boolean;
  storedQuestions: StoredQuestion[];
  incorrectQuestions: StoredQuestion[];
  stayTime: number;
  goToHomePage: () => void;
  showDetails: (id: number) => void;
  goToReport: () => void;
  goToRecommendQuiz: () => void;
}

const ViewResultPage = ({
  totalCount,
  answerCount,
  loading,
  stayTime,
  storedQuestions,
  goToHomePage,
  showDetails,
  goToReport,
  goToRecommendQuiz,
}: Props) => {
  const correctRate = () => ((answerCount / totalCount) * 100).toFixed();

  return (
    <>
      <section className="h-full ">
        <div className="px-[1%] pt-[1%] h-[30%] bg-white gap-4 flex flex-col justify-start lg:max-w-[60%] mx-auto">
          <div className="flex justify-end">
            <HomeButton onClick={goToHomePage} />
          </div>
        </div>
        <div className="px-[2%] pt-[50px] h-[30%] bg-white gap-4 flex flex-col justify-start lg:max-w-[60%] mx-auto">
          <h2 className="text-2xl font-semibold">문제풀이 결과</h2>{" "}
          <span className="inline-grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="h-[120px] text-lg justify-center items-center flex bg-gray-100 hover:bg-slate-200 p-3 rounded-sm shadow-md  flex-col">
              <div>총 학습시간</div>
              <p className="font-bold text-2xl">{stayTime} 초</p>
              {/* <div>{stayTime}</div> */}
            </div>
            <div className="h-[120px] text-lg justify-center items-center flex bg-gray-100 hover:bg-slate-200 p-3 rounded-sm shadow-md  flex-col">
              <p className="font-bold text-2xl">
                {answerCount + "/" + totalCount + "문제 정답"}
              </p>
              <p className=" ">{"정답률 " + correctRate() + "%"}</p>
            </div>
          </span>
        </div>

        <div className="px-[2%] pt-[50px] bg-white gap-4 flex flex-col justify-start lg:max-w-[60%] mx-auto pb-4 ">
          <h2 className="text-2xl font-semibold">문제풀이 점검</h2>
          <span className="inline-grid grid-cols-1 lg:grid-cols-2 gap-4">
            {storedQuestions.map((e, index) => (
              <QuestionBox
                key={`${index}`}
                e={e}
                index={index}
                showDetails={showDetails}
              ></QuestionBox>
            ))}
          </span>
        </div>

        <div className="px-[2%] pt-[50px] bg-white gap-4 flex flex-col justify-start lg:max-w-[60%] mx-auto mb-8 pb-[300px]">
          <h2 className="text-2xl font-semibold">AI 분석결과 보기</h2>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
            <button
              className="h-[120px] bg-gray-100 p-3 rounded-sm shadow-md flex flex-col justify-center text:lg lg:text-xl items-center text-center hover:bg-slate-200"
              onClick={goToReport}
            >
              <p>📊 분석결과 보고서</p>
            </button>
            <button
              className="h-[120px] bg-gray-100 p-3 rounded-sm shadow-md flex flex-col justify-center text:lg lg:text-xl items-center text-center hover:bg-slate-200"
              onClick={goToRecommendQuiz}
            >
              <p> 📝 추천 문제 모의고사</p>
            </button>
            {/* <div className="h-[120px] bg-gray-100 p-3 rounded-sm shadow-md flex flex-col justify-center text-2xl text-center hover:bg-slate-200"></div> */}
          </div>
        </div>
      </section>
      {loading ? <Loader loading={loading} /> : <div></div>}
    </>
  );
};

export default ViewResultPage;
