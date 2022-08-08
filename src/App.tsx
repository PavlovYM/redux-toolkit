import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Counter from './views/Counter'
import Home from './views/Home'
import Posts from './views/Posts'

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />} path='/'>
          <Route element={<Home />} index />
          <Route element={<Posts />} path='posts' />
          <Route element={<Counter />} path='counter' />
        </Route>
      </Routes>
    </>
  )
}

export default App