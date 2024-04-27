import styled from 'styled-components'

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


  @media screen and (max-width: 600px) {
    .search-result_header {
      padding: 2rem 0rem;
    }
    .artist-img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }
`

export default SearchResultStyle
