export const initialState = {
  user: null,
  playlists: [],
  token: null,

  playing: false,
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
    default:
      return state;
  }
};
export default reducer;
