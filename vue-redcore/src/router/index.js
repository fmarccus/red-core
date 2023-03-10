import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'

import RoleIndex from '../views/roles/RoleIndex.vue'
import RoleCreate from '../views/roles/RoleCreate.vue'
import RoleEdit from '../views/roles/RoleEdit.vue'


import UserIndex from '../views/users/UserIndex.vue'
import UserCreate from '../views/users/UserCreate.vue'
import UserEdit from '../views/users/UserEdit.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/roles',
      name: 'RoleIndex',
      component: RoleIndex
    },
    {
      path: '/roles/create',
      name: 'RoleCreate',
      component: RoleCreate
    },
    {
      path: '/roles/:id/edit',
      name: 'RoleEdit',
      component: RoleEdit,
      props: true
    },
    {
      path: '/users',
      name: 'UserIndex',
      component: UserIndex
    },
    {
      path: '/users/create',
      name: 'UserCreate',
      component: UserCreate
    },
    {
      path: '/users/:id/edit',
      name: 'UserEdit',
      component: UserEdit,
      props: true
    },

  ]

})

// router.beforeEach((to, from, next) => {
//   const userToken = localStorage.getItem('token')
//   if (!userToken && to.name != 'Login') {
//     // Continue to page.

//   } return { name: 'Login' }
// });
router.beforeEach(async (to, from) => {
  const userToken = localStorage.getItem('token')
  if (
    // make sure the user is authenticated
    !userToken &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})
export default router
