<template>
  <v-toolbar extended>
    <v-toolbar-title class="toolbar-title">{{ nome }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
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
</style>