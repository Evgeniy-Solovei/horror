import axios from "axios";

interface IReviews {
  id: number;
  datetime: string;
  name: string;
  text: string;
}

export const fetchReviews = (): Promise<IReviews[]> => {
  return axios
    .get("https://extrareality.by/api2/reviews?quest_id=3544")
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};
