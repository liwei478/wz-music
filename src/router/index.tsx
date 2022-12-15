import React from 'react'
import Discover from '@/views/discover'
import { Navigate, RouteObject } from 'react-router-dom'
import Focus from '@/views/focus'
import Mine from '@/views/mine'
import Download from '@/views/download'

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
