import React from 'react'
import { useLocation } from 'react-router-dom' // Assuming you're using React Router
import Sidebar from '../../organism/Sidebar/Sidebar'
import MainlayoutStyle from './MainLayoutStyle'
import Header from '../../organism/Header/Header'
import MusicPlayer from '../../organism/MusicPlayer/MusicPlayer'
import SearchHeader from '../../organism/SearchHeader/SearchHeader'

type mainlayoutType = {
  children: React.ReactElement
}

const MainLayout = ({ children }: mainlayoutType) => {
  const location = useLocation();
  const isSearchPage = location.pathname.includes("search");

  return (
    <MainlayoutStyle>
      <main className="main-layout">
        <div className="main-layout_menu">
          <Sidebar />
        </div>
        <section className="mainlayout__body">
          {!isSearchPage ? <Header /> :   <SearchHeader/>}
          {children}
          <MusicPlayer />
        </section>
      </main>
    </MainlayoutStyle>
  )
}

export default MainLayout
