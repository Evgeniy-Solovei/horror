import axios from "axios";

export const fetchReviews = () => {
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
