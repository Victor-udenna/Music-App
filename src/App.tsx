import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Components/templates/MainLayout/MainLayout'
import { Suspense, lazy } from 'react'
import Loader from './Components/templates/Loader/Loader'

const Search = lazy(() => import('./Components/pages/Search'))
const Home = lazy(() => import('./Components/pages/Home'))

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </>
  )
}

export default App
