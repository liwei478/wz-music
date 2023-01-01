import React, { memo, ReactNode, useEffect } from 'react'
import type { FC } from 'react'
import {
  fetchRankingDataAction,
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
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  /**发起action请求获取数据 */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())

    // dispatch(fetchBannerDataAction())
    // dispatch(fetchHotRecommendsAction())
    // dispatch(fetchNewAlbumsAction())
  }, [])

  // jsx render 函数的返回
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
