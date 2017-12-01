<template>
  <v-app dark id="inspire">

    <v-navigation-drawer absolute clipped enable-resize-watcher v-model="drawer" app>
      <v-list dense>
        <v-list-tile v-for="item in projetos" :key="item" exact>
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Title
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="blue-grey darken-3" dense fixed clipped-left app>
      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar-title>
    </v-toolbar>
    
  </v-app>
</template>

<script>
export default {
	props: [
		'projetos',
	],
	data: () => ({
		drawer: null,
	}),
};
</script>

<style scoped>

</style>