import Login from '@/views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      title: '登入',
    },
  },
  {
    path: '/console',
    redirect: '/console/udemy',
    component: () => import('@/views/Console.vue'),
    children: [
      {
        path: 'udemy',
        name: 'console',
        component: () => import('@/views/Udemy.vue'),
        meta: {
          title: 'udemy',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'all',
    redirect: '/',
  },
];

export default routes;
