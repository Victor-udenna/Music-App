import React from 'react'
import Sidebar from '../../organism/Sidebar/Sidebar'
import MainlayoutStyle from './MainLayoutStyle'
import Header from '../../organism/Header/Header'

type mainlayoutType = {
  children: React.ReactElement
}

const MainLayout = ({ children }: mainlayoutType) => {
  return (
    <MainlayoutStyle>
      <main className="main-layout">
        <div className='main-layout_menu'>
        <Sidebar />
        </div>
        <section className="mainlayout__body">
          <Header />
          {children}
        </section>
      </main>
    </MainlayoutStyle>
  )
}

export default MainLayout
