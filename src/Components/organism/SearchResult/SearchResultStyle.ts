import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const SearchResultStyle = styled.div`
  padding: 6rem 2.5rem 2.5rem 2.5rem;

  .search-result_header {
    padding: 3rem 0px;
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
    padding: 2rem 0px;

    .search-header {
      font-weight: 600;
      color: ${Colors.neutral};
      padding-bottom: 12px;
    }
  }

  .quick-search {
    display: flex;
    align-items: center;
    gap: 32px;
    flex-wrap: wrap;

    button {
      padding: 6px;
      border: 1px solid ${Colors.brand};
      background-color: ${Colors.button};
      color: ${Colors.brand};
      border-radius: 6px;
      font-weight: 600;
      font-size: 13px;
    }
  }

  @media screen and (max-width: 600px) {
    .search-result_header {
      padding: 2rem 0rem;
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

export default SearchResultStyle
