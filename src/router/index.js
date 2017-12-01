import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Page2 from '@/pages/Page2';
import Page3 from '@/pages/Page3';

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
			path: '/page2',
			name: 'Page2',
			component: Page2,
		},
		{
			path: '/page3',
			name: 'Page3',
			component: Page3,
		},
	],
});
