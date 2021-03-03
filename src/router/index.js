import Vue from 'vue'
import VueRouter from 'vue-router'
import common from './modules/common'
import user from './modules/user'
import order from './modules/order'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [...order, ...user, ...common]
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from, next) => {

})
export default router
