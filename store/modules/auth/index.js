import initialState from './initialState';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const inBrowser = typeof window !== 'undefined';
// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : initialState;

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}