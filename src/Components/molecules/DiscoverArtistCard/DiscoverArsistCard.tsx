import DiscoverArtistCardStyle from './DiscoverArtistCardStyle'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'
import defaultAvatar from "../../../assets/images/defaultAvatar.jpg"

type DiscoverCard = {
  artistImg: string
  title: string
  onClick: () => void;
}

const DiscoverArsistCard = ({ artistImg, title, onClick }: DiscoverCard) => {
  const shortenString = (str: string) => {
    const { length } = str
    return length > 11 ? `${str.slice(0, 8)}...` : str
  }
  return (
    <DiscoverArtistCardStyle>
            <div role="button" onClick={onClick} className="discover-card">
        <Img className="music-img" image={artistImg ? artistImg : defaultAvatar} />
        <Text
          className="music-title"
          value={title ? shortenString(title) : 'loading'}
        />
      </div>
    </DiscoverArtistCardStyle>
  )
}

export default DiscoverArsistCard

