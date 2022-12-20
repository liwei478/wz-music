import React, { memo, ReactNode, useEffect } from 'react'
import type { FC } from 'react'
import { fetchBannerDataAction } from './store/recommend'
import { useAppDispatch } from '@/store'

interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  /**发起action请求获取数据 */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  // jsx render 函数的返回
  return <div>Recommend</div>
}

export default memo(Recommend)
