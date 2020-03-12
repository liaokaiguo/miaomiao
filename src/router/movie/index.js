export default {
  path: '/movie',
  component: () => import('@/components/Movie'),
  children:[{
    path:'nowPlaying',
    component: () => import('@/components/NowPlaying')
  },{
    path:'city',
    component: () => import('@/components/City')
  },{
    path:'comingSoon',
    component: () => import('@/components/ComingSoon')
  },{
    path:'search',
    component: () => import('@/components/Search')
  },{
    path:'/movie',
    redirect:'/movie/nowPlaying'
  }]
}
