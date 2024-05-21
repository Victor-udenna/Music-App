import SidebarStyle from './SidebarStyle'
import Img from '../../atoms/Image/Img'
import avatarImg from '../../../assets/images/avatar.svg'
import { NavLink, useLocation } from 'react-router-dom'
import Text from '../../atoms/Text/Text'
import { FaHeadphones } from 'react-icons/fa6'
import { IoSearchSharp } from 'react-icons/io5'
import { IoMdHeart } from 'react-icons/io'
import { FaCirclePlay } from 'react-icons/fa6'
import { MdOutlineFormatListBulleted } from 'react-icons/md'

const Sidebar = () => {
  const location = useLocation()

  return (
    <SidebarStyle>
      <nav className="sidebar">
        <div className="sidebar-menu__img">
          <Img image={avatarImg} />
          <Text className="user-name" value="Victor Udennaya" />
        </div>
        <div className="sidebar-menu_container">
          <div
            className={`sidebar-menu ${
              location.pathname === '/' ? 'active' : ''
            }`}
          >
            <NavLink to={'/'}>
              <div className="sidebar-menu__item">
                <FaHeadphones size={16} />
                <Text className="menu-item_text" value={'Discover'} />
              </div>
            </NavLink>
          </div>
          <div
            className={`sidebar-menu ${
              location.pathname === '/search' ? 'active' : ''
            }`}
          >
            <NavLink to={'/search'}>
              <div className="sidebar-menu__item">
                <IoSearchSharp size={18} />
                <Text className="menu-item_text" value={'Search'} />
              </div>
            </NavLink>
          </div>
          <div
            className={`sidebar-menu ${
              location.pathname === '/favourites' ? 'active' : ''
            }`}
          >
            <NavLink to={'/favourites'}>
              <div className="sidebar-menu__item">
                <IoMdHeart size={16} />
                <Text className="menu-item_text" value={'Favourites'} />
              </div>
            </NavLink>
          </div>
          <div
            className={`sidebar-menu ${
              location.pathname === '/playlists' ? 'active' : ''
            }`}
          >
            <NavLink to={'/playlist'}>
              <div className="sidebar-menu__item">
                <FaCirclePlay size={16} />
                <Text className="menu-item_text" value={'Playlists'} />
              </div>
            </NavLink>
          </div>

          <div
            className={`sidebar-menu ${
              location.pathname === '/charts' ? 'active' : ''
            }`}
          >
            <NavLink to={'/charts'}>
              <div className="sidebar-menu__item">
                <MdOutlineFormatListBulleted size={16} />
                <Text className="menu-item_text" value={'Charts'} />
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </SidebarStyle>
  )
}

export default Sidebar
