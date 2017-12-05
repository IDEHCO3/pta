<template>
  <v-toolbar extended class="blue-grey darken-1">
  	<spacer/>
    <v-toolbar-title class="toolbar-title cyan--text">{{ nome }}</v-toolbar-title>

		<v-text-field
			slot="extension"
			placeholder="Procurar atividade" 
			append-icon="search" 
			class="search cyan--text">
		</v-text-field>

  </v-toolbar>
</template>

<script>
export default {
	name: 'ProjetoCard',
	props: ['nome'],
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar-title{
	font-size: 1.5em;
}
.search{
	max-width: 80%
}
</style>