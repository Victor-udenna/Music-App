import SearchHeaderStyle from "./SearchHeaderStyle"

const SearchHeader = () => {
  return (
   <SearchHeaderStyle>
     <header className="header">
   <form>
    <input placeholder="Enter artist name" type="search"/>
   </form>
     </header>
   </SearchHeaderStyle>
  )
}

export default SearchHeader