import { $api } from "@/app/entities/api";
import axios from "axios";

export const fetchBookings = (
  horror: number,
  data: string,
  slot: number,
  first_name: string,
  last_name: string,
  phone: string,
  certificate: boolean,
  comment: string,
  price?: string
) => {
  return axios
    .post(`${$api}/api/bookings/`, {
      horror,
      data,
      slot,
      first_name,
      last_name,
      phone,
      certificate,
      comment,
      price,
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};
