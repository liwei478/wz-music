import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">歌曲排行</Link>
        <Link to="/discover/songs">歌曲</Link>
        <Link to="/discover/djradio">电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
