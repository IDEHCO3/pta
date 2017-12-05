<template>
	<div id="projeto">
		<projeto-card 
		:nome="projeto.nome"
		/>

		<projeto-expansion-panels 
		:atividades="projeto.atividades"
		/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjetoCard from './projeto-components/ProjetoCard';
import ProjetoExpansionPanels from './projeto-components/ProjetoExpansionPanels';

export default {
	name: 'Projeto',
	components: {
		ProjetoCard, ProjetoExpansionPanels,
	},
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
		};
	},
	computed: {
		...mapGetters({
			projeto: 'getProjetoAtual',
		}),
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#projeto {
	width: 100%;
}
</style>
