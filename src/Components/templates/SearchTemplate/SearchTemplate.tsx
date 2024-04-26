import { useState } from 'react'
import SearchResult from '../../organism/SearchResult/SearchResult'
import SearchTemplateStyle from './SearchTemplateStyle'
import SearchHeader from '../../organism/SearchHeader/SearchHeader'

const SearchTemplate = () => {
  const [artistName, setArtistName] = useState('')

  const handleFormSubmit = (value: any) => {
    setArtistName(value)
  }


  return (
    <SearchTemplateStyle>
      <SearchHeader onFormSubmit={handleFormSubmit} />
      <SearchResult artistname={artistName} />
    </SearchTemplateStyle>
  )
}

export default SearchTemplate
