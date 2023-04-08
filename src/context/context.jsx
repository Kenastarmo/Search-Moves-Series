import React, { createContext, useReducer } from "react";
import { serviceapi } from "../service/serviceapi";
import reducer from "./reducer";

const initialState = {
  movies_series: {
    data: [],
    error: "",
  },
  one_movie_serie: null,
};

export const globalContext = createContext(initialState);

export const MovieProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMoviesSeries = async (value, type) => {
    // try {
    //   const response = await serviceapi(value, type);
    //   dispatch({
    //     type: "GET_MOVIES_SUCCESS",
    //     payload: response.data,
    //   });
    // } catch (error) {
    //   console.error(error);
    // }

    serviceapi(value, type)
      .then((data) => {
        dispatch({
          type: "GET_MOVIES_SUCCESS",
          payload: { data: data.data, total: data.total },
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <globalContext.Provider value={{ fetchMoviesSeries }}>
      {props.children}
    </globalContext.Provider>
  );
};
