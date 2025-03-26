import { $api } from "@/app/entities/api";
import axios from "axios";

export function fetchSlots(id: number) {
  return axios
    .get(`${$api}/api/horrors/${id}/available-slots/`)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((err) => {
      console.error("Ошибка запроса: ", err);
    });
}
