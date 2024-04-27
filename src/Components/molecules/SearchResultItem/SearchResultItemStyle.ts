import styled from 'styled-components'

const SearchResultItemStyle = styled.div`
  .result-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 1rem 0;
    border-radius: 6px;
    cursor: pointer;
    .album-artist {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 200px;
    }
  }

  .result-desc {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    width: 200px;
  }

  .result-list:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .result-img {
    height: 50px;
    border-radius: 6px;
  }

  @media screen and (max-width: 600px) {
    .result-list {
      .result-desc {
        width: 100%;
        flex-grow: 1;
        flex-shrink: 0;
      }
      .artist-name,
      .album-name {
        display: none;
      }
    }

    .result-list:hover {
      border: none;
    }
  }
`

export default SearchResultItemStyle
