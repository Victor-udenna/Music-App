import MusicCardStyle from './MusicCardStyle'
import Img from '../../atoms/Image/Img'
import Text from '../../atoms/Text/Text'
import artistImg from '../../../assets/There_Is_More_by_Hillsong_Worship_(Official_Album_Cover).jpg'

const MusicCard = () => {
  return (
    <MusicCardStyle>
      <div className="music-card">
        <Img className="music-img" image={artistImg} />
        <Text className="music-title" value="Dandelion" />
      </div>
    </MusicCardStyle>
  )
}

export default MusicCard
