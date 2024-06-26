import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const MusicPlayerStyle = styled.div`
  .music-player {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 2rem;
    position: fixed;
    bottom: 0px;
    right: 0px;
    width: fit-content;
    width: 85%;
    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.87);
      background-color: #242424;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    @media (prefers-color-scheme: light) {
      color: #213547;
      background-color: #ffffff;
    }
  }

  * {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0px;
      padding: 0px;
      cursor: pointer;
    }
  }

  .music__functionality {
    display: flex;
    align-items: center;
    gap: 48px;
    .controls-container {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .control-header {
      width: 174px;
    }
  }

  .coverimg {
    width: 70px;
    height: 70px;
    border-radius: 6px;
  }

  .music-title {
    font-weight: 600;
    font-size: 17px;
  }

  .playpause-btn {
    width: 52px;
    height: 52px;
    background-color: ${Colors.brand};
    border-radius: 50%;
    color: #ffffff;
  }

  .notactive_button {
    width: 52px;
    height: 52px;
    background-color: ${Colors.neutral};
    border-radius: 50%;
    color: #ffffff;
  }

  .backfront-btn {
    color: ${Colors.neutral};
    background-color: inherit;
  }

  .music__seek__container {
    width: 60%;
  }

  .music__seek__container input[type='range'] {
    width: 100%;
    height: 8px;
    background-color: transparent;
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;

    &::-webkit-slider-runnable-track {
      background-color: ${Colors.neutral};
      border-radius: 10px;
      height: 8px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 11px;
      height: 11px;
      margin-top: -1.2px;
      background-color: ${Colors.brand};

      border-radius: 50%;
      cursor: pointer;
    }
  }

  .music__seek__container input[type='range'] {
    width: 100%;
    height: 8px;
  }

  .multi__control {
    display: flex;
    align-items: center;
    gap: 2rem;
    button {
      color: ${Colors.neutral};
      background-color: inherit;
    }
  }

  .toggle-func_btn {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .music-player {
      width: 80%;
      padding: 1rem;
      gap: 1rem;
      .control-header,
      .multi__control {
        display: none;
      }

      .playpause-btn,
      .notactive_button {
        width: 50px;
        height: 50px;
      }
      .toggle-func_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: inherit;
        color: ${Colors.neutral};
      }
    }
  }
`

export default MusicPlayerStyle
