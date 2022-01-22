import Vuex from 'vuex';
import users from './modules/users';
import auth from './modules/auth';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      users: users,
      auth: auth,
    }
  });
};

export default createStore