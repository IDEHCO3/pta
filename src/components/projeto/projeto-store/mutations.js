import { compareId, urlToId } from '@/utils/utils';

export default {
	setProjetoAtual(state, projeto) {
		state.id_plano_interno = projeto.id_plano_interno;
		state.id_projeto = projeto.id_projeto;
		state.id_unidade_organizacional = projeto.id_unidade_organizacional;
		state.nome = projeto.nome;
		state.sigla = projeto.sigla;
		state.atividades = [];
		this.state.atividade_list.map((atividade) => {
			const idAtividadeProjeto = urlToId(atividade.id_projeto);
			if (compareId(idAtividadeProjeto, state.id_projeto)) {
				state.atividades.push(atividade);
			}
			return false;
		});
	},
};
