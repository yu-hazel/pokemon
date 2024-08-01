// import { createRouter, createWebHistory } from 'vue-router/auto';

// const router = createRouter({
//   history: createWebHistory('/build-test/'),
// });

// export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import MiniGame from '@/pages/MiniGame.vue';
import PokeCard from '@/pages/poke_card.vue';
import PokeNameQuiz from '@/pages/poke_name_quiz.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/minigame',
    component: MiniGame,
  },
  {
    path: '/minigame/pokecard',
    component: PokeCard
  },
  {
    path: '/minigame/namequiz',
    component: PokeNameQuiz
  },
];

const router = createRouter({
  history: createWebHistory('/pokemon/'),  // GitHub Pages URL 경로 설정
  routes,
});

export default router;