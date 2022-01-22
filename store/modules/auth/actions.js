import * as Types from "./types";
import axios from 'axios';

export default {
  BEGIN_AUTH: async ({ commit, state }, payload) => {
    const { isBusy } = state;
    if (isBusy) {
      return;
    }
    commit(Types.SET_BUSY, true);
    try{
        console.log("payload", payload);
        const response = await axios.post("http://localhost:3001/login",payload);
        commit(Types.SET_AUTH, true);
        return response.status;
    }
    catch(e){
        console.log(e);
        commit(Types.SET_AUTH, false);
    }
    commit(Types.SET_BUSY, false);
  },
};
