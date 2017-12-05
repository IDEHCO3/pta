<template>
  <v-expansion-panel popout>
    <v-expansion-panel-content v-for="(atividade) in atividades" :key="atividade.id_atividade">
      <div slot="header">{{atividade.nome}}</div>
      <v-card>
		<projeto-tabs></projeto-tabs>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>