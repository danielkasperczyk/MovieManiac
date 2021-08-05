import { MoviesState } from '@/store/modules/types';
import { RootState } from '@/store/types';

import { Module } from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
} as Module<MoviesState, RootState>;
