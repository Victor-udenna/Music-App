import styled from 'styled-components'

const SidebarStyle = styled.div`
  min-height: 100vh;
  width: 100%;

  .sidebar {
    background-color: #574fd8;
    min-height: 100vh;
    padding: 2rem 0rem;
    position: fixed;
    width: 15%;
  }

  .sidebar-menu_container {
    margin-top: 1.5rem;
  }

  .sidebar-menu__img {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }

  .sidebar-menu {
    background-color: #574fd8;
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
      img {
        width: 27px;
        height: 27px;
        border-radius: 50%;
      }
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
