import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import { useAppSelector } from './store'

// import { useSelector } from 'react-redux'
// import { IRootState } from './store'
// import store from './store'

// type GetStateFnType = typeof store.getState
// type IRootState = ReturnType<GetStateFnType>
function App() {
  const { count, message, age } = useAppSelector((state) => ({
    count: state.counter.count,
    message: state.counter.message,
    age: state.counter.age
  }))

  // const { count, message } = useSelector((state: IRootState) => ({
  //   count: state.counter.count,
  //   message: state.counter.message
  // }))

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载</Link>
      </div>
      <h2>
        count: {count}
        message: {message}
        age: {age}
      </h2>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
