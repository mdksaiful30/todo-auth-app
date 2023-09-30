import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue';
import Todo from '../views/TodoView.vue';
import Completed from '../views/CompletedView.vue';
import Profile from '../views/ProfileView.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';

import authStore from '../stores/authStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: '/completed',
      name: 'completed',
      component: Completed,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = authStore();

  if(to.meta.requiresAuth && auth.isAuthenticated != true){
    next('/login');
  }else{
    next();
  }
});

export default router