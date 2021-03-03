export default [
  {
    path: '/',
    component: () => import('/src/views/Home.vue'),
    meta: {}
  },
  {
    path: '/Login',
    component: () => import('/src/views/Login.vue'),
    meta: {}
  },
  {
    path: '/Error404',
    component: {},
    meta: {}
  }
]
