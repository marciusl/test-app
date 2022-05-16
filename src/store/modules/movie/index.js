import state from './movieState';
import mutations from './movieMutations';
import getters from './movieGetters';
import actions from './movieActions';

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
