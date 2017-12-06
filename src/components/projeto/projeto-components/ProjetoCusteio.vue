<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md6 v-for="(item,i) in 5" :key="i" >
        <v-expansion-panel inset >
          <v-expansion-panel-content class="expand-panel">
            <div slot="header" >Item</div>
            <v-card>
              <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 md6>
        <v-expansion-panel inset >
          <v-expansion-panel-content class="expand-panel">
            <div slot="header">TOTAL</div>
            <v-card>
              <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
		};
	},
};
</script>

<style scoped>
.expand-panel{
	border-bottom: 1px solid white;
}
</style>