import SearchResultItemStyle from './SearchResultItemStyle'
import musicThumbnail from '../../../assets/images/defaultThumbnail.png'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'

const SearchResultItem = () => {
  return (
    <SearchResultItemStyle>
      <div role="button" className="result-list">
        <Img className="result-img" image={musicThumbnail} />
        <Text className="song-title" value="dandelion" />
        <Text className="artist-name" value="ruth b" />
        <Text className="album-name" value="album" />
      </div>
    </SearchResultItemStyle>
  )
}

export default SearchResultItem
