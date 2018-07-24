import Vue from 'vue'
import Router from 'vue-router'
import index from './views/Index.vue'
import buy from './views/Buy.vue'
import release from './views/Release.vue'
import user from './views/User.vue'
import publish from './views/Publish.vue'
import waiting from "./components/release/Waiting"
import login from "./components/login"
import register from "./components/register"
import school from "./components/school"
import detail from "./components/Detail"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/sale'
    },
    {
      path: '/sale',
      name: 'index',
      component: index
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/release',
      name: 'release',
      component: release
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      // children: [
      //   {
      //     path: 'login',
      //     name: 'login',
      //     components: login
      //   }
      // ]
    },
    {
      path: '/buy/publish',
      name: 'publish',
      component: publish
    },
    {
      path:"/release/waiting",
      name:"waiting",
      component:waiting
    },
    {
      path:"/user/login",
      name:"login",
      component:login
    },
    {
      path:"/user/register",
      name:"register",
      component:register
    },
    {
      path:"/school",
      name:"school",
      component:school
    },
    {
      path:"/detail",
      name:"detail",
      component:detail
    }
  ]
})
