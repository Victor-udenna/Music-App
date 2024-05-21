import styled from 'styled-components'

const NotFoundTemplateStyle = styled.div`
  .error-ui {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 24px;
    gap: 24px;
    width: 100%;
    z-index: 100;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    .error_img {
      width: 400px;
    }

    .error-header-text {
      font-weight: 600;
      font-size: 22px;
    }

    .error-description {
      text-align: center;
    }

    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.87);
      background-color: #242424;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    @media (prefers-color-scheme: light) {
      :root {
        color: #213547;
        background-color: #ffffff;
      }
    }
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    button {
      font-weight: bold;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
    }

    .home-btn {
      border: none;
      color: #ffffff;
      background-color: #574fd8;
    }

    .reload-btn {
      border: none;
      color: #574fd8;
      background-color: inherit;
    }
  }

  @media screen and (max-width: 600px) {
    .error-ui {
      padding: 16px;
      .error_img {
        width: 250px;
      }

      .error-header-text {
        font-weight: 600;
        font-size: 22px;
        margin-top: 20px;
      }
    }
  }
`

export default NotFoundTemplateStyle
