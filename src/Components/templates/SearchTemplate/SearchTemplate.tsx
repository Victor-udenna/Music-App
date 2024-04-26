import SearchResult from '../../organism/SearchResult/SearchResult'
import SearchTemplateStyle from './SearchTemplateStyle'
import SearchHeader from '../../organism/SearchHeader/SearchHeader'

const SearchTemplate = () => {
  return (
    <SearchTemplateStyle>
    <SearchHeader/>    
      <SearchResult />
    </SearchTemplateStyle>
  )
}

export default SearchTemplate
