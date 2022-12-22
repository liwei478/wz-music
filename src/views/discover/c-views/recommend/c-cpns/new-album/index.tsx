import React, { ElementRef, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'
import { useRef } from 'react'
import { shallowEqualApp, useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  // 定义内部数据
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  // 从 redux 中获取数据
  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    shallowEqualApp
  )
  // console.log(newAlbums)

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
            {[0, 1].map((item) => (
              <div key={item}>
                <div className="album-list">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => (
                    <NewAlbumItem key={album.id} itemData={album} />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <button className="sprite_02 arrow arrow-right" onClick={handleNextClick}></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
