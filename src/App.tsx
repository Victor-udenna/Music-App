import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Sidebar from './Components/organism/Sidebar/Sidebar';
import Home from './Components/pages/Home'
import Search from './Components/pages/Search'
import MainLayout from './Components/templates/MainLayout/MainLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient()

  return (
    <>
<QueryClientProvider client={queryClient}>
<MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </MainLayout>
</QueryClientProvider>
    </>
  )
}

export default App
