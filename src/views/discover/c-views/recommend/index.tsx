import React, { memo, ReactNode, useEffect } from 'react'
import type { FC } from 'react'
import {
  /* fetchBannerDataAction,
  fetchHotRecommendsAction,
  fetchNewAlbumsAction, */
  fetchRecommendDataAction
} from './store/recommend'
import { useAppDispatch } from '@/store'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'

interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  /**发起action请求获取数据 */
  const dispatch = useAppDispatch()
  useEffect(() => {
    // dispatch(fetchBannerDataAction())
    // dispatch(fetchHotRecommendsAction())
    // dispatch(fetchNewAlbumsAction())
    dispatch(fetchRecommendDataAction())
  }, [])

  // jsx render 函数的返回
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          left
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
