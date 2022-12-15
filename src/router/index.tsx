import React from 'react'
import Discover from '@/views/discover'
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />
  }
]

export default routes
