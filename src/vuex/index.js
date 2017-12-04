import Vue from 'vue';
import Vuex from 'vuex';

import projetoAtual from '@/components/projeto/projeto-store/store';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';


Vue.use(Vuex);

export default new Vuex.Store({
	actions,
	getters,
	mutations,
	state,
	modules: {
		projetoAtual,
	},
});
