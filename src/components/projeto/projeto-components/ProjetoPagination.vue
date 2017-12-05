<template>
  <div class="text-xs-center pt-2">
    <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
  </div>
</template>

<script>
	export default {
		data () {
			return {
				pagination: {},
			};
		},
		computed: {
			pages () {
				return this.pagination.rowsPerPage ? Math.ceil(this.items.totalItems / this.pagination.rowsPerPage) : 0
			}
		}
	}
</script>