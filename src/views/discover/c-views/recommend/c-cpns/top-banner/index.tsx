import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  /**从 store 中获取数据 */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  return (
    <div>
      {banners.map((item) => (
        <div key={item.imageUrl}>{item.imageUrl}</div>
      ))}
    </div>
  )
}

export default memo(TopBanner)
