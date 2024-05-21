import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Components/templates/MainLayout/MainLayout'
import { Suspense, lazy } from 'react'
import Loader from './Components/templates/Loader/Loader'
import ErrorBoundary from './ErrorBoundary'
import ErrorUi from './Components/templates/ErrorUi/ErrorUi'

const Search = lazy(() => import('./Components/pages/Search'))
const Home = lazy(() => import('./Components/pages/Home'))
const NotFound = lazy(()=> import("./Components/pages/NotFound"))

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary fallback={<ErrorUi/>}>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </ErrorBoundary>
      </Suspense>
    </>
  )
}

export default App
