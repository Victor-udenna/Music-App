import styled from 'styled-components'
import Colors from '../../../helpers/Colors'

const SearchResultStyle = styled.div`
  padding: 4rem 2.5rem 2.5rem 2.5rem;

  .search-result_header {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3rem 0px;
    gap: 20px;
  }

  .artist-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .result-artist_name {
    font-weight: 600;
    font-size: 28px;
  }

  .artist-stat {
    display: flex;
    align-items: center;
    gap: 12px;

    .icon-stat {
      background-color: ${Colors.button};
      color: ${Colors.brand};
      display: flex;
      gap: 8px;
      align-items: center;
      padding: 10px;
      border-radius: 6px;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 600px) {
    .search-result_header {
      padding: 2rem 1.5rem 1.5rem 1.5rem;
    }
    .artist-img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    .result-artist_name {
      font-size: 20px;
    }
  }
`

export default SearchResultStyle
