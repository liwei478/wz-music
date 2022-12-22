import React, { ElementRef, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'
import { useRef } from 'react'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  // 定义内部数据
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  // 事件处理的函数
  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }
  const handleNextClick = () => {
    bannerRef.current?.next()
  }
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button className="sprite_02 arrow arrow-left" onClick={handlePrevClick}></button>
        <div className="banner">
          <Carousel speed={1500} dots={false} ref={bannerRef}>
            {[1, 2].map((item) => (
              <h1 key={item}>{item}</h1>
            ))}
          </Carousel>
        </div>
        <button className="sprite_02 arrow arrow-right" onClick={handleNextClick}></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
