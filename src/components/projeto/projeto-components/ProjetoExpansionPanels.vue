<template>
  <v-expansion-panel popout>
    <v-expansion-panel-content v-for="atividade in atividades" :key="atividade.id_atividade">
      <div slot="header">{{atividade.nome}}</div>
      <v-card>
				<projeto-tabs
				:dataInicio="dateLocale(atividade.data_inicio)"
				:dataFim="dateLocale(atividade.data_fim)"
				:prioridade="atividade.prioridade"
				:situacaoPlanejada="atividade.situacao_planejada"
				:responsavel="getOrgName(atividade.id_unidade_responsavel)"
				:executora="getOrgName(atividade.id_unidade_executora)"
				></projeto-tabs>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjetoTabs from './ProjetoTabs';

export default {
	name: 'ProjetoExpansionPanels',
	props: ['atividades'],
	components: {
		ProjetoTabs,
	},
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
		};
	},
	computed: {
		...mapGetters({
			unidadeOrganizacional: 'getUnidadeOrganizacionalList',
		}),
	},
	methods: {
		dateLocale(date) {
			return date.split('-').reverse().join('/');
		},
		getOrgName(linkedData) {
			const id = parseInt(linkedData.split('/').reverse()[1], 10);
			const org = this.unidadeOrganizacional.find(uni => uni.id_unidade_organizacional === id);
			return org.nome;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>