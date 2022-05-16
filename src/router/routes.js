// single pages
import HomePage from '../pages/HomePage.vue';
import MovieFormPage from '../pages/MovieFormPage.vue';
import NotFoundPage from '../pages/NotFound.vue';

import { DOMAIN_TITLE } from '../.env';

export const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePage,
    meta: { title: `${DOMAIN_TITLE} | home` },
  },
  {
    path: '/movie-edit/:id',
    name: 'movie-edit-page',
    component: MovieFormPage,
    meta: { title: `${DOMAIN_TITLE} | movie edit page` },
  },
  {
    path: '*',
    component: NotFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` },
  },
];
