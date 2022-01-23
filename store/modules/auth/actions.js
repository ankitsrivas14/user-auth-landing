import * as Types from "./types";
import axios from 'axios';
import { setCookie } from "~/utils/cookie";

export default {
  BEGIN_AUTH: async ({ commit, state }, payload) => {
    const { isBusy } = state;
    if (isBusy) {
      return;
    }
    commit(Types.SET_BUSY, true);
    try{
        const response = await axios.post("https://inisev-backend.herokuapp.com/login",payload);
        commit(Types.SET_AUTH, true);
        commit(Types.SET_TOKEN, response.data.token);
        setCookie({
          name: process.env.NUXT_ENV_LS_NAME_TOKEN,
          value: response.data.token,
        });
        return response.status;
    }
    catch(e){
        console.log(e);
        commit(Types.SET_AUTH, false);
    }

    commit(Types.SET_BUSY, false);
  },
};