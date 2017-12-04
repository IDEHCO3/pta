<template>
  <v-tabs fixed icons centered>
    <v-tabs-bar dark color="cyan">
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tabs-item href="#tab-1">
        <v-icon>phone</v-icon>
        Recents
      </v-tabs-item>
      <v-tabs-item href="#tab-2">
        <v-icon>favorite</v-icon>
        Favorites
      </v-tabs-item>
      <v-tabs-item href="#tab-3">
        <v-icon>account_box</v-icon>
        Nearby
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content
        v-for="i in 3"
        :key="i"
        :id="'tab-' + i"
      >
        <v-card flat>
          <v-card-text>{{ msg }}</v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
export default {
	name: 'ProjetoTabs',
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