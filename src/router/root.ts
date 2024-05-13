export default [
  {
    path: '/login',
    name: 'index',
    meta: {
      title: '首页',
    },
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/contain',
    name: 'layout',
    meta: {
      title: '导航页',
    },
    children: [
      {
        path: '/contain',
        name: 'menu',
        meta: {
          title: '导航页',
        },
        component: () => import('@/pages/contain/index.vue'),
      },
    ],
  },
];
