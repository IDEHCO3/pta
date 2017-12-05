<template>
  <div>
    <v-navigation-drawer absolute clipped v-model="drawer" app class="grey lighten-2">
      <v-list dense>
        <v-list-tile v-for="projeto in projetos" :key="projeto.id_projeto" exact @click="currentProjeto(projeto)">
          <v-list-tile-action>
            <v-icon color="black">assignment</v-icon>
          </v-list-tile-action>
          <v-tooltip right>
            <v-list-tile-content slot="activator">
              <v-list-tile-title class="black--text">{{projeto.sigla}}</v-list-tile-title>
            </v-list-tile-content>
              <span>{{projeto.nome}}</span>
          </v-tooltip>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dense fixed clipped-left app class="blue-grey darken-1">
      <v-toolbar-title>
        <v-toolbar-side-icon color="cyan--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar-title>
    </v-toolbar> 
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	props: [
		'projetos',
	],
	data: () => ({
		drawer: null,
	}),
	methods: {
		...mapMutations({
			projetoAtual: 'setProjetoAtual',
		}),
		currentProjeto(projeto) {
			this.projetoAtual(projeto);
			this.$router.push({ name: 'Projeto', params: { sigla: projeto.sigla } });
		},
	},
};
</script>

<style scoped>

</style>