<template>
  <v-expansion-panel expand>
    <v-expansion-panel-content v-for="(item,i) in 5" :key="i" v-bind:value="item === 2">
      <div slot="header">Item</div>
      <v-card>
				<projeto-tabs></projeto-tabs>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import ProjetoTabs from './projetoTabs';

export default {
	name: 'ProjetoExpansionPanels',
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