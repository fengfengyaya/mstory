import Vue from 'vue'
import Router from 'vue-router'
import Story from '@/views/story.vue'
import Subject from '@/views/subject.vue'
import Recommend from '@/views/story/Recommend.vue'
import Uptodate from '@/views/story/Uptodate.vue'
import Career from '@/views/subject/career.vue'
import Feeling from '@/views/subject/feeling.vue'
import Native from '@/views/subject/native.vue'
import Past from '@/views/subject/past.vue'
import Recommend1 from '@/views/subject/recommend1.vue'
import Uptodate1 from '@/views/subject/uptodate1.vue'
import Detail from '@/views/detail.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/story',
      // name: 'home',
      component: Story,
      children: [
        {
          path: 'recommend',
          component: Recommend
        },
        {
          path: 'uptodate',
          component: Uptodate
        },
        {
          path: '/',
          redirect: '/story/recommend'
        }
      ]
    },
    {
      path: '/subject',
      // name: 'about',
      component: Subject,
      children: [
        {
          path: 'career',
          component: Career
        },
        {
          path: 'feeling',
          component: Feeling
        },
        {
          path: 'native',
          component: Native
        },
        {
          path: 'past',
          component: Past
        },
        {
          path: 'recommend1',
          component: Recommend1
        },
        {
          path: 'uptodate1',
          component: Uptodate1
        },
        {
          path: '/',
          redirect: '/subject/recommend1'
        }
      ]
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '',
      redirect: '/subject/recommend1'
    }
  ]
})

export default router
