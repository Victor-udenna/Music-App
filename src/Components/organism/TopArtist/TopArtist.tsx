import TopArtistStyle from './TopArtistStyle'
import Text from '../../atoms/Text/Text'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'
import Img from '../../atoms/Image/Img'
import defaultImg from '../../../assets/images/defaultAvatar.jpg'
import MusicCard from '../../molecules/MusicCard/MusicCard'
import {
  useGetTopArtistQuery,
  useGetTopArtistSongQuery,
} from '../../../redux/MusicApi'

const TopArtist = () => {
  8697922
  const { data: topArtist, isFetching } = useGetTopArtistQuery('8697922')
  const { data: topArtistSong } = useGetTopArtistSongQuery('ruth b')
  console.log(isFetching)
  console.log(topArtistSong)

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
              <Img
                className="artist-img"
                image={
                  topArtist ? topArtist.picture_big : defaultImg
                }
              />
              <Text
                className="artistname"
                value={topArtist ? topArtist.name : 'loading'}
              />
            </div>
            { topArtistSong && topArtistSong.data.map((music: any) => {
              return (
                <MusicCard
                  musicId={music.id}
                  musicImg={music.album.cover_big}
                  title={music.title}
                />
              )
            })}
          </div>
        </div>
      </section>
    </TopArtistStyle>
  )
}

export default TopArtist
