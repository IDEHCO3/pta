import { urlToId } from '@/utils/utils';
import store from '@/vuex/index';

const sortDiarias = function () {
	const diarias = [];
	store.state.atividade_custeio_list.map((atividade) => {
		if (urlToId(atividade.id_custeio) === 1) {
			return diarias.push(atividade);
		}
		return false;
	});
	return diarias;
};

const sortMaterialDeConsumo = function () {
	const materialDeConsumo = [];
	store.state.atividade_custeio_list.map((atividade) => {
		if (urlToId(atividade.id_custeio) === 2) {
			return materialDeConsumo.push(atividade);
		}
		return false;
	});
	return materialDeConsumo;
};

const sortPassagens = function () {
	const passagens = [];
	store.state.atividade_custeio_list.map((atividade) => {
		if (urlToId(atividade.id_custeio) === 3) {
			return passagens.push(atividade);
		}
		return false;
	});
	return passagens;
};

const sortPessoaFisica = function () {
	const pessoaFisica = [];
	store.state.atividade_custeio_list.map((atividade) => {
		if (urlToId(atividade.id_custeio) === 4) {
			return pessoaFisica.push(atividade);
		}
		return false;
	});
	return pessoaFisica;
};

const sortPessoaJuridica = function () {
	const pessoaJuridica = [];
	store.state.atividade_custeio_list.map((atividade) => {
		if (urlToId(atividade.id_custeio) === 5) {
			return pessoaJuridica.push(atividade);
		}
		return false;
	});
	return pessoaJuridica;
};

const sortContribuicaoPrevidenciaria = function () {
	const contribuicaoPrevidenciaria = [];
	store.state.atividade_custeio_list.map((atividade) => {
		if (urlToId(atividade.id_custeio) === 6) {
			return contribuicaoPrevidenciaria.push(atividade);
		}
		return false;
	});
	return contribuicaoPrevidenciaria;
};

const sortOutros = function () {
	const outros = [];
	store.state.atividade_custeio_list.map((atividade) => {
		if (urlToId(atividade.id_custeio) === 7) {
			return outros.push(atividade);
		}
		return false;
	});
	return outros;
};

const sortAquisicaoDeSoftware = function () {
	const aquisicaoDeSoftware = [];
	store.state.atividade_custeio_list.map((atividade) => {
		if (urlToId(atividade.id_custeio) === 8) {
			return aquisicaoDeSoftware.push(atividade);
		}
		return false;
	});
	return aquisicaoDeSoftware;
};

const sortAquisicaoDeEquipamentos = function () {
	const aquisicaoDeEquipamentos = [];
	store.state.atividade_custeio_list.map((atividade) => {
		if (urlToId(atividade.id_custeio) === 9) {
			return aquisicaoDeEquipamentos.push(atividade);
		}
		return false;
	});
	return aquisicaoDeEquipamentos;
};

const sortPassagensExterior = function () {
	const passagensExterior = [];
	store.state.atividade_custeio_list.map((atividade) => {
		if (urlToId(atividade.id_custeio) === 10) {
			return passagensExterior.push(atividade);
		}
		return false;
	});
	return passagensExterior;
};

const sortDesenvolvimentoDeSoftware = function () {
	const desenvolvimentoDeSoftware = [];
	store.state.atividade_custeio_list.map((atividade) => {
		if (urlToId(atividade.id_custeio) === 11) {
			return desenvolvimentoDeSoftware.push(atividade);
		}
		return false;
	});
	return desenvolvimentoDeSoftware;
};

const sortServicosGraficos = function () {
	const servicosGraficos = [];
	store.state.atividade_custeio_list.map((atividade) => {
		if (urlToId(atividade.id_custeio) === 12) {
			return servicosGraficos.push(atividade);
		}
		return false;
	});
	return servicosGraficos;
};

const sortDiariasExterior = function () {
	const diariasExterior = [];
	store.state.atividade_custeio_list.map((atividade) => {
		if (urlToId(atividade.id_custeio) === 13) {
			return diariasExterior.push(atividade);
		}
		return false;
	});
	return diariasExterior;
};
