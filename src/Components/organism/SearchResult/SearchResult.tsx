import SearchResultStyle from './SearchResultStyle'
import artistImg from '../../../assets/images/defaultAvatar.jpg'
import SearchResultItem from '../SearchResultItem/SearchResultItem'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'
import { IoAlbums } from 'react-icons/io5'
import { PiUsersFourFill } from 'react-icons/pi'

const SearchResult = () => {
  return (
    <SearchResultStyle>
      <section className="search-result">

        <div className="search-result_header">
          <Img className="artist-img" image={artistImg} />
          <Text className="result-artist_name" value={'Ruth b'} />
          <div className='artist-stat'>
            <div className='icon-stat'>
              <IoAlbums /> <Text value={'1121'} />
            </div>
            <div className='icon-stat'>
              <PiUsersFourFill /> <Text value={'1121'} />
            </div>
          </div>
        </div>

        <div>
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
        </div>
      </section>
    </SearchResultStyle>
  )
}

export default SearchResult
