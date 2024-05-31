"use client";
import { demo1 } from "@/demo/demo";
import { demoResult } from "@/demo/demoResult";
import { Question } from "@/type/Question";
import React, { useState, useEffect } from "react";
import { parseTestNumber } from "@/utils/parseTestNumber";
import { parseQuestionType } from "@/utils/parseQuestionType";
import { useRecoilValue } from "recoil";
import { allQuestionAtom } from "@/recoil/all-question-atom";

import ViewTeacherPage from "../view/ViewTeacherPage";

export default function TeacherPageComponent() {
  const [data, setData] = useState<Question[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<Question | null>(null);
  const allQuestion = useRecoilValue(allQuestionAtom);

  useEffect(() => {
    // 데이터 fetch 예시
    setTimeout(() => {
      setData(allQuestion);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <ViewTeacherPage
        loading={loading}
        data={data}
        setSelectedItem={(item: Question) => {
          setSelectedItem(item);
        }}
        selectedItem={selectedItem}
      />
    </>
  );
}
