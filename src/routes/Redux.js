import { configureStore } from "@reduxjs/toolkit";

function toogleReducer(
  state = { toggleOn: false, searchBarUrl: false, query: '' },
  action
) {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, toggleOn: !state.toggleOn };
    case "SET_QUERY":
      return { ...state, query: action.query };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: toogleReducer,
});

export default store;
