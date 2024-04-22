import TopArtistStyle from './TopArtistStyle'
import Text from '../../atoms/Text/Text'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'
import Img from '../../atoms/Image/Img'
import artistImg from '../../../assets/There_Is_More_by_Hillsong_Worship_(Official_Album_Cover).jpg'
import MusicCard from '../../molecules/MusicCard/MusicCard'

const TopArtist = () => {
  return (
    <TopArtistStyle>
      <section className="top-artist">
        <div className="top-artist_header">
          <Text className="" value="Your Top Artist" />
          <hr></hr>
          <div className="btn-container">
            <button className="scoll-left_btn">
              <FaAngleLeft />
            </button>
            <button className="scoll-right_btn">
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="top-artist_container">
          <div className="top-artist_wrapper">
            <div className="artist-container">
              <Img className="artist-img" image={artistImg} />
              <Text className="artistname" value="Ruth B" />
            </div>
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
          </div>
        </div>
      </section>
    </TopArtistStyle>
  )
}

export default TopArtist
