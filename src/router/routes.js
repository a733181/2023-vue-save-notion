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
        name: 'udemy',
        component: () => import('@/views/Udemy.vue'),
        meta: {
          title: 'udemy',
        },
      },
      {
        path: 'youtube',
        name: 'youtube',
        component: () => import('@/views/Youtube.vue'),
        meta: {
          title: 'youtube',
        },
      },
      {
        path: 'bilibili',
        name: 'bilibili',
        component: () => import('@/views/Bilibili.vue'),
        meta: {
          title: 'bilibili',
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
