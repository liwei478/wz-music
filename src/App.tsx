import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'
import { useAppDispatch } from './store'
import AppPlayerBar from './views/player/app-player-bar'
import { fetchCurrentSongAction } from './views/player/store/player'

function App() {
  // 获取某一首喜欢的歌曲
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(1842025914))
  }, [])

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      {/* 音乐播放器的展示 */}
      <AppPlayerBar />
    </div>
  )
}

export default App
