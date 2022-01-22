import * as Types from "./types";

export default {
  [Types.SET_BUSY]: (state, val) => {
    state.isBusy = val;
  },
  [Types.SET_USERS]: (state, val) => {
    state.users = val;
  },
};
