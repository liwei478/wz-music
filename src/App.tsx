import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import { shallowEqualApp, useAppDispatch, useAppSelector } from './store'
import { changeMessageAction } from './store/modules/counter'
import Demo02 from './views/demo/demo02'

// import { useSelector } from 'react-redux'
// import { IRootState } from './store'
// import store from './store'

// type GetStateFnType = typeof store.getState
// type IRootState = ReturnType<GetStateFnType>
function App() {
  const { count, message, age } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
      age: state.counter.age
    }),
    shallowEqualApp
  )

  // const { count, message } = useSelector((state: IRootState) => ({
  //   count: state.counter.count,
  //   message: state.counter.message
  // }))

  // 事件处理函数
  const dispatch = useAppDispatch()
  function handleChangeMessage() {
    dispatch(changeMessageAction('hhhhhhhhh'))
  }

  return (
    <div className="App">
      <div className="nav">
        <Demo02 name="lwz" age={18} />
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载</Link>
      </div>
      <h2>count: {count}</h2>
      <h2>message: {message}</h2>
      <h2>age: {age}</h2>
      <button onClick={handleChangeMessage}>修改message</button>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
