import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/app-components/home/Home';
import Projeto from '@/components/app-components/projeto/Projeto';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/:sigla',
			name: 'Projeto',
			component: Projeto,
		},
	],
});
