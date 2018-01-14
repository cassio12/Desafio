import Vue from 'vue'
import Router from 'vue-router'
import Desafio from '@/components/Desafio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Desafio',
      component: Desafio
    }
  ]
})
