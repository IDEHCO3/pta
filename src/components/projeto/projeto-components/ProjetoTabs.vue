<template>
  <v-tabs fixed icons centered :scrollable="false">
    <v-tabs-bar dark color="blue-grey darken-1">
      <v-tabs-slider color="cyan"></v-tabs-slider>

      <v-tabs-item href="#projeto-info">
        <v-icon color="light-blue accent-2">info</v-icon>
      </v-tabs-item>

      <v-tabs-item href="#projeto-custeio">
        <v-icon color="yellow accent-2">monetization_on</v-icon>
      </v-tabs-item>

      <v-tabs-item href="#projeto-charts">
        <v-icon color="light-green accent-2">insert_chart</v-icon>
      </v-tabs-item>
    </v-tabs-bar>

    <v-tabs-items>
      <v-tabs-content id="projeto-info">
				<projeto-info
				:dataInicio="dataInicio"
				:dataFim="dataFim"
				:prioridade="prioridade"
				:situacaoPlanejada="situacaoPlanejada"
				:responsavel="responsavel"
				:executora="executora"
				></projeto-info>
      </v-tabs-content>

      <v-tabs-content id="projeto-custeio">
				<projeto-custeio></projeto-custeio>
      </v-tabs-content>

      <v-tabs-content id="projeto-charts">
				<projeto-charts></projeto-charts>
      </v-tabs-content>
    </v-tabs-items>

  </v-tabs>
</template>

<script>
import ProjetoCharts from './ProjetoCharts';
import ProjetoCusteio from './ProjetoCusteio';
import ProjetoInfo from './ProjetoInfo';

export default {
	name: 'ProjetoTabs',
	props: [
		'dataInicio', 'dataFim', 'prioridade', 'situacaoPlanejada', 'responsavel', 'executora',
	],
	components: {
		ProjetoCharts, ProjetoCusteio, ProjetoInfo,
	},
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#projeto {
  width: 100%;
}
</style>