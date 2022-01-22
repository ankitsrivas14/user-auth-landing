import * as Types from "./types";
import Users from "@/models/Users";

export default {
  FETCH_ALL_USERS: async ({ commit, state }) => {
    const { isBusy, users } = state;
    if (isBusy || users.length) {
      return;
    }
    commit(Types.SET_BUSY, true);
    try {
      const {data}  = await Users.fetchAllUsers();
      if(data){
        commit(Types.SET_USERS, data);
      }
    } catch (e) {
      console.error(e);
    }
    commit(Types.SET_BUSY, false);
  }
};
