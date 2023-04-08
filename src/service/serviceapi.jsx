import axios from "axios";

export const serviceapi = (value, type) => {
  const API = `http://www.omdbapi.com/?type=${type}&apikey=3c0bf875&s=`;

  // axios.get(API + searchtvshows)

  // .then((response) => {
  //   const list = response.data.Search;
  //   console.log(response.data.Search)
  //   setTvshows(list)
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

  return axios
    .get(API + value)
    .then((response) => {
      const data = response.data.Search;
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};
