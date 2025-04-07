import { $api } from "@/app/entities/api";
import axios from "axios";

export const fetchHorrors = () => {
  return axios
    .get(`${$api}/api/horrors`)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((err) => console.error("Ошибка твоя: ", err));
};
