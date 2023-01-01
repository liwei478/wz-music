import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { BarControl, BarOperator, BarPlayerInfo, PlayerBarWrapper } from './style'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/discover/player">
            <img
              className="image"
              src="https://p2.music.126.net/dvBE3I5IYmDTmZq9SyKoRA==/109951168159576909.jpg?param=34y34"
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">纵横四海</span>
              <span className="singer-name">李荣浩</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="current">00:45</span>
                <span className="divider">/</span>
                <span className="duration">04:01</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
