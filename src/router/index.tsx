import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

// 所有的路由都会打包到一个文件
// import Discover from '@/views/discover'
// import Focus from '@/views/focus'
// import Mine from '@/views/mine'
// import Download from '@/views/download'

// 路由懒加载及分包处理
const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
