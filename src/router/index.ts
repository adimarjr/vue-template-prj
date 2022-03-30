import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import SampleView from '@/views/SampleView.vue'
import DashBoardView from '@/views/DashBoardView.vue'
import { useAuthStore } from '@/stores/AuthStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'sample',
          component: SampleView,
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: DashBoardView,
        }
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/logout',
      name: 'Logout',
      component: LogoutView
    }
  ]
})

router.beforeEach(async (to, from) => {
  const auth = useAuthStore()
  console.log(auth.user.id)
  if (!auth.isAuthenticated && to.name !== 'Login') {
    return { name: 'Login' }
  }
})

export default router
