import styled from 'styled-components'

const MainlayoutStyle = styled.div`
  .main-layout {
    display: grid;
    grid-template-columns: 15% 85%;
    width: 100%;
  }

  .main-layout__menu {
    position: relative;
  }

  .mainlayout__body {
    overflow-y: hidden;
    overflow-x: hidden;
    width: fit-content;
    position: relative;
    /* width: 100%; */
  }

  @media screen and (max-width: 600px) {
    .main-layout {
      grid-template-columns: 20% 80%;
    }
  }
`

export default MainlayoutStyle
