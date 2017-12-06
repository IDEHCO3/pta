import { sortByName } from '@/utils/utils';

export default {

	atividade_custeio_list(state, atividadeCusteioList) {
		state.atividade_custeio_list = atividadeCusteioList.sort(
			(a, b) => a.id_atividade_custeio - b.id_atividade_custeio);
	},

	atividade_limite_adm_list(state, atividadeLimiteAdmList) {
		state.atividade_limite_adm_list = atividadeLimiteAdmList.sort(
			(a, b) => a.id_atividade_limite_adm - b.id_atividade_limite_adm);
	},

	atividade_list(state, atividadeList) {
		state.atividade_list = atividadeList.sort(
			(a, b) => a.id_atividade - b.id_atividade);
	},

	classificacao_list(state, classificacaoList) {
		state.classificacao_list = classificacaoList.sort(sortByName);
	},

	custeio_list(state, custeioList) {
		state.custeio_list = custeioList.sort(sortByName);
	},

	limite_administrativo_list(state, limiteAdministrativoList) {
		state.limite_administrativo_list = limiteAdministrativoList.sort(
			(a, b) => a.id_limite_administrativo - b.id_limite_administrativo);
	},

	plano_interno_list(state, planoInternoList) {
		state.plano_interno_list = planoInternoList.sort(sortByName);
	},

	projeto_list(state, projetoList) {
		state.projeto_list = projetoList.sort(sortByName);
	},

	som_custeio_list(state, somCusteioList) {
		state.som_custeio_list = somCusteioList.sort(
			(a, b) => a.id_som_custeio - b.id_som_custeio);
	},

	som_limite_adm_list(state, somLimiteAdmList) {
		state.som_limite_adm_list = somLimiteAdmList.sort(
			(a, b) => a.id_som_limite_adm - b.id_som_limite_adm);
	},

	som_list(state, somList) {
		state.som_list = somList.sort(
			(a, b) => a.id_som - b.id_som);
	},

	unidade_organizacional_list(state, unidadeOrganizacionalList) {
		state.unidade_organizacional_list = unidadeOrganizacionalList.sort(
			(a, b) => a.id_unidade_organizacional - b.id_unidade_organizacional);
	},
};
