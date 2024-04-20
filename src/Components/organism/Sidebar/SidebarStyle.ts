import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const SidebarStyle = styled.div`
  min-height: 100vh;
  width: 100%;

  .sidebar {
    background-color: #574fd8;
    min-height: 100vh;
    padding: 2.3rem 0rem;
    position: fixed;
    width: 15%;
  }

  .sidebar-menu_container {
    margin-top: 1.5rem;
  }

  .sidebar-menu__img {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-bottom: 4rem;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .user-name {
      font-family: 'Inter', sans-serif;
      color: #ffff;
    }
  }

  .sidebar-menu {
    background-color: ${Colors.brand};
    a {
      color: #ffff;
      text-decoration: none;
      font-weight: 500;
    }
  }

  .sidebar-menu.active {
    background: linear-gradient(to right, #7974dd, #574fd8);
  }

  .sidebar-menu__item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 24px;

    p {
      font-family: 'Inter', sans-serif;
    }
  }

  @media screen and (max-width: 600px) {
    .sidebar {
      padding: 20px 0px;
      width: 20%;
    }
    .sidebar-menu__img {
      margin-top: 1.5rem;
      img {
        width: 27px;
        height: 27px;
        border-radius: 50%;
      }
    }

    .user-name {
      display: none;
    }

    .sidebar-menu__item {
      justify-content: center;
      align-items: center;
      gap: 0;
      padding: 24px 0px;

      .menu-item_text {
        display: none;
      }
    }
  }
`

export default SidebarStyle
