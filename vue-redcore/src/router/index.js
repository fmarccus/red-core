import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoleIndex from '../views/roles/RoleIndex.vue'
import UserIndex from '../views/users/UserIndex.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/roles',
      name: 'RoleIndex',
      component: RoleIndex
    },
    {
      path: '/users',
      name: 'UserIndex',
      component: UserIndex
    },

  ]
})

export default router
