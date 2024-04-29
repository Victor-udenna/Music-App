import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const SearchStyle = styled.div`
  .header {
    width: 100%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    padding: 1rem 2.5rem;
    position: fixed;
    top: 0px;

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

    form {
      width: 100%;
    }
  }

  input {
    width: 50%;
    height: 30px;
    padding: 1.5rem;
    border: 1px solid ${Colors.neutral};
    border-radius: 6px;
  }

  input:focus {
    border: 1px solid ${Colors.brand};
    outline: 1px solid ${Colors.brand};
  }

  .search-result {
    padding: 2.5rem;
  }

  .search-result_header {
    padding: 6rem 0rem 3rem 0rem;
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 4px;
  }

  .artist-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .result-artist_name {
    font-weight: 600;
    font-size: 18px;
  }

  .quick-search-container {
    padding: 6rem 2.5rem;

    .search-header {
      font-weight: 600;
      color: ${Colors.neutral};
      padding-bottom: 12px;
      padding-top: 1rem;
    }
  }

  .quick-search {
    display: flex;
    align-items: center;
    gap: 32px;
    flex-wrap: wrap;
    padding-top: 1rem;

    button {
      padding: 6px;
      border: 1px solid ${Colors.brand};
      background-color: ${Colors.button};
      color: ${Colors.brand};
      border-radius: 6px;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 600px) {
    .header {
      padding: 0.8rem 1.5rem;
      width: 80%;
    }
    input {
      width: 100%;
    }

    .search-result {
      padding: 1.5rem;
    }

    .search-result_header {
      padding: 4rem 0rem 2rem 0rem;
    }

    .quick-search-container {
      padding: 1.5rem;
    }

    .quick-search {
      gap: 12px;
      justify-content: between;
    }
    .artist-img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }
`

export default SearchStyle
