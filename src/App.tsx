import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/pages/Home'
import Search from './Components/pages/Search'
import MainLayout from './Components/templates/MainLayout/MainLayout'

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
