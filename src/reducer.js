export const initialState = {
  user: null,
  playlists: [],
  // null,
  token: null,

  playing: false,
  discover_weekly: null,
  item: null,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case "SET_USER":
      return {
        ...state,
        user: payload,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: payload,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: payload,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: payload,
      };
    default:
      return state;
  }
};
export default reducer;
