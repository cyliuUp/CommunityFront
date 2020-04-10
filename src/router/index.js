import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
// import HomePage from '@/pages/homePage/HomePage'
// import ActiveCalendar from '@/pages/activeCalendar/HomePage'
import AAList from '@/pages/aaList/HomePage'
import AAContent from '@/pages/aaContent/HomePage'
import CommodityDetails from '@/pages/commodityDetails/HomePage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/AList',
      name: 'AAList',
      component:AAList
    },{
      path: '/AContent',
      name: 'AAContent',
      component:AAContent
    },{
      path: '/CommodityDetails',
      name: 'CommodityDetails',
      component:CommodityDetails
    }
  ]
})
