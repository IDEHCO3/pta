<template>
  <v-app id="inspire" dark>
  	<pta-toolbar :projetos="projetoList" />
  	<v-content>
      <v-container fill-height>
        <v-layout justify-center >
        	<router-view/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PtaToolbar from './components/Pta-Toolbar';

export default {
	name: 'app',
	components: {
		PtaToolbar,
	},
	methods: {
		...mapActions({
			getAll: 'getAll',
		}),
	},
	computed: {
		...mapGetters({
			projetoList: 'getProjetoList',
		}),
	},
	created() {
		this.getAll();
	},
};
</script>

<style>

</style>
