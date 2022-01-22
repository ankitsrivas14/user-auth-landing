import * as Types from "./types";

export default {
  [Types.SET_BUSY]: (state, val) => {
    state.isBusy = val;
  },
  [Types.SET_AUTH]: (state, val) => {
    state.isAuth = val;
  },
};
