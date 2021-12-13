import { RouteRecordRaw } from 'vue-router'

import Login from '@/views/User/Auth/Login.vue'
import Register from '@/views/User/Auth/Register.vue'
import Logout from '@/views/User/Auth/Logout.vue'

const users: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
]

export default users
