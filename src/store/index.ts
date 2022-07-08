import { createStore } from 'vuex';

interface Test {
    count: number
}
const defaultState:Test = {
  count: 0,
};

// Create a new store instance.
export default createStore({
  state() {
    return defaultState;
  },
  mutations: {
    // increment(state: typeof defaultState) {
    //   state?.count++;
    // },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count;
    },
  },
});
