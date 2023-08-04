import { createRouter, createWebHistory } from 'vue-router';

import useAuthStore from '@/stores/auth/auth';

import routes from '@/router/routes.js';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.path !== '/') {
    if (!authStore.token) {
      next('/');
      return;
    }
  }
  next();
});

router.afterEach((to, from) => {
  document.title = to.meta.title;
  window.scrollTo(0, 0);
});

export default router;
