import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';
// eslint-disable-next-line
import projetoAtual from '../components/app-components/projeto/store/store';

Vue.use(Vuex);

export default new Vuex.Store({
	actions,
	getters,
	mutations,
	state,
	modules: { projetoAtual },
});
