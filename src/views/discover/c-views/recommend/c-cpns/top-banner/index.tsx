import React, { memo, useRef, useState } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import classNames from 'classnames'

import { shallowEqualApp, useAppSelector } from '@/store'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  /**获取当前高亮的图片index */
  const [currentIndex, setCurrentIndex] = useState(0)
  /**定义内部的数据  */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  /**从 store 中获取数据 */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )

  const handleBeforeChange = () => {
    // setCurrentIndex(-1)
  }
  const handleAfterChange = (current: number) => {
    setCurrentIndex(current)
  }
  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }
  const handleNextClick = () => {
    bannerRef.current?.next()
  }

  /**获取背景图片 */
  let bgImageUrl
  if (currentIndex >= 0 && banners.length > 0) {
    bgImageUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }

  return (
    /**bgImageUrl={bgImageUrl} */
    <BannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            dots={false}
            autoplay
            ref={bannerRef}
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
          >
            {banners.map((item: any) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: currentIndex === index
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
