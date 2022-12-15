import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Download from './views/download'

function App() {
  return (
    <div className="App">
      <Download name="lwz" age={18}>
        <div>haahah</div>
        <div>Hello World</div>
      </Download>
      <div className="main">{useRoutes(routes)}</div>
    </div>
  )
}

export default App
