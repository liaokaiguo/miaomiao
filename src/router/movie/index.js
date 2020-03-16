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
    path:'detail/1/:movieId',
    components:{
      default:() => import('@/components/NowPlaying'),
      detail:() => import('@/components/Movie/detail')
    },
    props:{
      detail : true,
    }
  },{
    path:'detail/2/:movieId',
    components:{
      default:() => import('@/components/ComingSoon'),
      detail:() => import('@/components/Movie/detail')
    },
    props:{
      detail : true,
    }
  },{
    path:'/movie',
    redirect:'/movie/nowPlaying'
  }]
}
