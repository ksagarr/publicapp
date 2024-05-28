import { createRouter, createWebHistory } from 'vue-router'
import { session } from './data/session'
import { userResource } from '@/data/user'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    name: 'Login',
    path: '/account/login',
    component: () => import('@/pages/Login.vue'),
  },
  { name:'Texteditor',
    path: '/Texteditor',
    component: () => import('@/component/Texteditor.vue'),
  },
  { name:'Taost',
    path: '/Toast',
    component: () => import('@/component/CustomToast.vue'),
  },
  { 
    name:'General',
    path: '/General',
    component: () => import('@/component/General.vue'),
  },
  {
    name:'Meeting',
    path: '/Meeting',
    component: () => import('@/component/Meeting.vue'),
  },
  {
    name:'Work',
    path: '/Work',
    component: () => import('@/component/Work.vue'),
  },
  {
    name:'Video',
    path: '/Video',
    component: () => import('@/component/Video.vue'),
  },
  { 
    name:'Project',
    path: '/Project',
    component: () => import('@/component/Project.vue'),
  },
  { name: 'Text',
    path: '/Text/:name',
    component: () => import('@/component/Text.vue'),
    props:true
  },
]

let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})

router.beforeEach(async (to, from, next) => {
  let isLoggedIn = session.isLoggedIn
  try {
    await userResource.promise
  } catch (error) {
    isLoggedIn = false
  }

  if (to.name === 'Login' && isLoggedIn) {
    next({ name: 'Home' })
  } else if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
