<template>
  <div id="app">
  	<pta-toolbar/>
  	<v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
        	<router-view/>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
	created() {
		this.getAll();
	},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
