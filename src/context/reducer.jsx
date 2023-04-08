export default function reducer(state, action) {
  switch (action.type) {
    case "GET_MOVIES_SUCCESS":
      return { ...state, data: action.payload };
    case "GET_MOVIES_FAILURE":
      return { ...state, error: "nesto ne valja" };
    default:
      return state;
  }
}
