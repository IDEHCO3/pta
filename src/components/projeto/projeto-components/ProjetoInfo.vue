<template>
  <v-card color="grey lighten-2" flat>
    <v-card-text>
      <v-container fluid grid-list-md class="box grey lighten-4">

        <v-layout xs12 row>
          <v-flex xs3>
            <v-subheader class="blue--text">Data inicio</v-subheader>
          </v-flex>
          <v-flex xs5>
            <v-card-text>{{dataInicio}}</v-card-text>
          </v-flex>

          <v-flex xs3>
            <v-subheader class="blue--text">Data fim</v-subheader>
          </v-flex>
          <v-flex xs5>
            <v-card-text>{{dataFim}}</v-card-text>
          </v-flex>
        </v-layout>

        <v-layout xs12 row>
          <v-flex xs3>
            <v-subheader class="blue--text">Prioridade</v-subheader>
          </v-flex>
          <v-flex xs2>
            <v-card-text>{{prioridade}}</v-card-text>
          </v-flex>

          <v-flex xs3>
            <v-subheader class="blue--text">Unidade responsável</v-subheader>
          </v-flex>
          <v-flex xs5>
            <v-card-text>{{responsavel}}</v-card-text>
          </v-flex>

          </v-flex>
        </v-layout>

        <v-layout xs12 row>
          <v-flex xs3>
            <v-subheader class="blue--text">Situação planejada</v-subheader>
          </v-flex>
          <v-flex xs2>
            <v-card-text>{{situacaoPlanejada}}</v-card-text>
          </v-flex>

          <v-flex xs3>
            <v-subheader class="blue--text">Unidade executora</v-subheader>
          </v-flex>
          <v-flex xs5>
            <v-card-text>{{executora}}</v-card-text>
          </v-flex>

          </v-flex>
        </v-layout>

      </v-container>
    </v-card-text>
</v-card>
</template>

<script>
export default {
	props: [
		'dataInicio',
		'dataFim',
		'prioridade',
		'situacaoPlanejada',
		'responsavel',
		'executora',
	],

	data() {
		return {
			pagination: {},
		};
	},
};
</script>

<style scoped>
	.box{
		border-radius: 10px;
    color: #4682B4;
    font-weight: 600;
	}
</style>