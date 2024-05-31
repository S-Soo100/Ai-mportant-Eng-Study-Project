import { Question } from "@/type/Question";
import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AITUTOR_BACKEND_PRODUCT_SERVER;

export const getAllQuestion = async (): Promise<Question[] | null> => {
  axios.defaults.baseURL = "";
  const axiosOption: AxiosRequestConfig = {
    url: `${BASE_URL}question`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await axios
    .request(axiosOption)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => console.log(`ERROR IS : ${error.message}`));

  if (!res) {
    return null;
  }

  return res as Question[];
};
