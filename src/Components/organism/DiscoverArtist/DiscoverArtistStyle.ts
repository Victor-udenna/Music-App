import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const DiscoverArtistStyle = styled.div`
  .discover-artist_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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

    p {
      font-weight: 600;
      color: ${Colors.neutral};
    }
    hr {
      width: 80%;
      border: 1.2px solid ${Colors.neutral};
    }

    .btn-container {
      button {
        cursor: pointer;
        background-color: inherit;
        color: ${Colors.brand};
        border: none;
        gap: 12px;
        cursor: pointer;
      }
    }
  }

  .discover-artist_container {
    width: 100%;
  }

  .discover-artist_wrapper {
    display: flex;
    align-items: center;
    gap: 32px;
    padding-top: 2rem;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .discover-artist_wrapper::-webkit-scrollbar {
  display: none;
}

  @media screen and (max-width: 600px) {
    .discover-artist_header {
      hr {
        width: 15%;
      }
    }
  }
`

export default DiscoverArtistStyle
