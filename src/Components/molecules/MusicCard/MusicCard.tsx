import MusicCardStyle from './MusicCardStyle'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'
import defaultMusic from '../../../assets/images/defaultThumbnail.png'

type MusicCard = {
  musicImg: string
  title: string
  onClick: () => void
}

const MusicCard = ({ musicImg, title, onClick }: MusicCard) => {
  const shortenString = (str: string) => {
    const { length } = str
    return length > 11 ? `${str.slice(0, 8)}...` : str
  }

  return (
    <MusicCardStyle>
      <div role="button" onClick={onClick} className="music-card">
        <Img className="music-img" image={musicImg ? musicImg : defaultMusic} />
        <Text
          className="music-title"
          value={title ? shortenString(title) : 'loading'}
        />
      </div>
    </MusicCardStyle>
  )
}

export default MusicCard
