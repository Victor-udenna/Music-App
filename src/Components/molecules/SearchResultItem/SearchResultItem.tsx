import SearchResultItemStyle from './SearchResultItemStyle'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'

type SearchResultItemType = {
  songtitle: string
  artist: string
  album: string
  musicImg: any
}

const SearchResultItem = ({
  songtitle,
  artist,
  album,
  musicImg,
}: SearchResultItemType) => {
  const shortenString = (str: string) => {
    const { length } = str
    return length > 11 ? `${str.slice(0, 8)}...` : str
  }
  return (
    <SearchResultItemStyle>
      <div role="button" className="result-list">
        <div className="result-desc">
          <Img
            className="result-img"
            image={musicImg ? musicImg : 'music img'}
          />
          <Text
            className="song-title"
            value={songtitle ? shortenString(songtitle) : 'loading'}
          />
        </div>
        <div className="album-artist">
          <Text
            className="artist-name result-item"
            value={artist ? shortenString(artist) : 'loading'}
          />
        </div>
        <div className="album-artist">
          <Text
            className="album-name result-item"
            value={album ? shortenString(album) : 'loading'}
          />
        </div>
      </div>
    </SearchResultItemStyle>
  )
}

export default SearchResultItem
