import axios from 'axios';

export default {

	getAll({ commit }) {
		axios.get('atividade-custeio-list')
		.then((res) => { commit('atividade_custeio_list', res.data); });

		axios.get('atividade-limite-adm-list')
		.then((res) => { commit('atividade_limite_adm_list', res.data); });

		axios.get('atividade-list')
		.then((res) => { commit('atividade_list', res.data); });

		axios.get('classificacao-list')
		.then((res) => { commit('classificacao_list', res.data); });

		axios.get('custeio-list')
		.then((res) => { commit('custeio_list', res.data); });

		axios.get('limite-administrativo-list')
		.then((res) => { commit('limite_administrativo_list', res.data); });

		axios.get('plano-interno-list')
		.then((res) => { commit('plano_interno_list', res.data); });

		axios.get('projeto-list')
		.then((res) => { commit('projeto_list', res.data); });

		axios.get('som-custeio-list')
		.then((res) => { commit('som_custeio_list', res.data); });

		axios.get('som-limite-adm-list')
		.then((res) => { commit('som_limite_adm_list', res.data); });

		axios.get('som-list')
		.then((res) => { commit('som_list', res.data); });

		axios.get('unidade-organizacional-list')
		.then((res) => { commit('unidade_organizacional_list', res.data); });
	},
};
