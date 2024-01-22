import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/login/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
   
    {
      path: '/video',
      name: 'video',
      component: () => import('../views/VideoView.vue')
    },
    
    {
      path: '/news',
      name: 'news',
      children: [
        {
          path: '',
          name:"newsView",
          component: () => import('../views/news/NewsView.vue')
        },
        {
          path: 'create',
          component: () => import('../views/news/NewsCreateEditView.vue')
        },
        {
          path: 'edit/:id',
          component: () => import('../views/news/NewsCreateEditView.vue')
        }
      ]
    },
   
    {
      path: '/materials',
      name: 'materials',
      component: () => import('../views/MaterialsView.vue')
    },
    {
      path: '/questions',
      name: 'questions',
      children:[
        {
          path: '',
          name:"questionsView",
          component: () => import('../views/questions/QuestionsView.vue')
        },
        {
          path: 'questcreate',
          component: () => import('../views/questions/QuestionsEdit.vue')
        },
        {
          path: 'questedit/:id',
          component: () => import('../views/questions/QuestionsEdit.vue')
        }
      ],
      
    },
    
   
  ]
})

export default router
