import { useState } from 'react'
import SearchHeaderStyle from './SearchHeaderStyle'

interface SearchHeaderProps {
  onFormSubmit: (artistName: string) => void
}

const SearchHeader = ({ onFormSubmit }: SearchHeaderProps) => {
  const [artistName, setArtistName] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onFormSubmit(artistName)
  }

  const handleChange = (e: any) => {
    setArtistName(e.target.value)
  }

  return (
    <SearchHeaderStyle>
      <header className="header">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="What do you want to play ?"
            type="search"
            value={artistName}
            onChange={handleChange}
            required
          />
        </form>
      </header>
    </SearchHeaderStyle>
  )
}

export default SearchHeader
